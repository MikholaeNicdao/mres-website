import Vue from 'vue'
import axios from 'axios'
import { formatPost } from '../plugins/textformatter.js'

export const state = () => ({
    announcements: [],
    recentAnnouncements: [],
    targetAnnouncement: [],
    pageAnnouncements: [],
    requestedPage: 1,
    announcementsPerPage: 8,
    pageCount: 0
})
  
export const mutations = {
    update(state, announcement) {
        state.announcements[announcement.id] = announcement
    },
    delete(state, id){
        Vue.delete(state.announcements, id)
    },
    setAnnouncements(state, announcements){
        state.announcements = announcements
        for (const announcement of state.announcements) 
            announcement = formatPost(announcement)
    },
    setRecentAnnouncements(state, recents){
        state.recentAnnouncements = recents
        for (const announcement of state.recentAnnouncements) 
            announcement = formatPost(announcement)
    },
    setPageAnnouncements(state, pageAnnouncements){
        state.pageAnnouncements = pageAnnouncements
        for (const announcement of state.pageAnnouncements) 
            announcement = formatPost(announcement)
    },
    setTargetAnnouncement(state, announcement){
        state.targetAnnouncement = formatPost(announcement)
    },
    setPageCount(state, pageCount){
        state.pageCount = pageCount
    }
}

export const actions = {
    async fetchAnnouncements({ commit }){
        try {
            const res = await axios.get("http://localhost:3306/api/v1/Announcements")

            commit('setAnnouncements', res.data.description)

        }catch (error) {
            console.log(error)
        }
    },
    async fetchTargetAnnouncement({ commit }, id){
        try {
            const res = await axios.get("http://localhost:3306/api/v1/Announcements/" + id)

            commit('setTargetAnnouncement', res.data.description[0])

        }catch (error) {
            console.log(error)
        }
    },
    async fetchPageAnnouncements({ commit }, page){
        try {
            const res = await axios.get("http://localhost:3306/api/v1/Announcements/page/" + page)

            commit('setPageAnnouncements', res.data.description)
            commit('setPageCount', res.data.pageCount)

        }catch (error) {
            console.log(error)
        }
    },
    async addAnnouncement({ dispatch }, formData){
        try {
            await axios.post("http://localhost:3306/api/v1/Announcements/add", formData)

            await dispatch('fetchAnnouncements')

        }catch (error) {
            console.log(error.message)
        }
    },
    async updateAnnouncement({ dispatch }, data){
        try {
            await axios.put("http://localhost:3306/api/v1/Announcements/update/" + data.id, data.formData)

            await dispatch('fetchAnnouncements')

        }catch (error) {
            console.log(error.message)
        }
    },
    async deleteAnnouncement({ dispatch }, id){
        try {
            await axios.delete("http://localhost:3306/api/v1/Announcements/remove/" + id)

            await dispatch('fetchAnnouncements')

        }catch (error) {
            console.log(error.message)
        }
    },
    // req is an object w/ the following properties
    // req.count for number of announcements to fetch
    // req.id to exclude the announcement with that id (optional)
    async fetchRecentAnnouncements({ commit, dispatch, state }, req){
        await dispatch('fetchAnnouncements')

        const recents = []

        for(const announcement of state.announcements){
            if (req?.id){
                if (announcement.id == req.id) continue
            }
            if (recents.length === req.count) break
            recents.push(announcement)
        }

        commit('setRecentAnnouncements', recents)
    }
}