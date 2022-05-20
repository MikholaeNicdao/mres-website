import Vue from 'vue'
import axios from 'axios'

export const state = () => ({
    announcements: [],
    recentAnnouncements: [],
    targetAnnouncement: [],
    requestedPage: 1
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
    },
    setRecentAnnouncements(state, recents){
        state.recentAnnouncements = recents
    },
    setTargetAnnouncement(state, announcement){
        state.targetAnnouncement = announcement
    },
    setPage(state, page){
        state.requestedPage = page
    },
    setDateString(state){
        for(const announcement of state.announcements){
            const date = new Date(announcement.createdAt)
            const formattedDate = 
            `
                ${date.toLocaleString('default', { month: 'long' })} 
                ${date.getDate()}, 
                ${date.getFullYear()}
            `
            announcement.createdAt = formattedDate
        }
    },
    setAuthor(state){
        for(const announcement of state.announcements){
            const i = announcement.description.lastIndexOf('_');
            announcement['author'] = announcement.description.slice(i+1)
            announcement['description'] = announcement.description.slice(0,i)
        }
    }
}

export const actions = {
    async fetchAnnouncements({ commit }){
        try {
            const res = await axios.get("http://localhost:4000/api/v1/Announcements")

            commit('setAnnouncements', res.data.description)
            commit('setDateString')
            commit('setAuthor')

        }catch (error) {
            console.log(error)
        }
    },
    async fetchTargetAnnouncement({ commit }, id){
        try {
            const res = await axios.get("http://localhost:4000/api/v1/Announcements/" + id)

            commit('setTargetAnnouncement', res.data.description[0])

        }catch (error) {
            console.log(error)
        }
    },
    async addAnnouncement({ dispatch }, formData){
        try {
            await axios.post("http://localhost:4000/api/v1/Announcements/add", formData)

            await dispatch('fetchAnnouncements')

        }catch (error) {
            console.log(error.message)
        }
    },
    async updateAnnouncement({ dispatch }, data){
        try {
            await axios.put("http://localhost:4000/api/v1/Announcements/update/" + data.id, data.formData)

            await dispatch('fetchAnnouncements')

        }catch (error) {
            console.log(error.message)
        }
    },
    async deleteAnnouncement({ dispatch }, id){
        try {
            await axios.delete("http://localhost:4000/api/v1/Announcements/remove/" + id)

            await dispatch('fetchAnnouncements')

        }catch (error) {
            console.log(error.message)
        }
    },
    // req is an object w/ the following properties
    //   req.count for number of announcements to fetch
    //   req.id to exclude the announcement with that id (optional)
    fetchRecentAnnouncements({ commit, state }, req){
        const recents = []
        for(const announcement of state.announcements){
            if (req?.id){
                if (announcement.id == req.id) continue
            }
            if (recents.length === req.count) break
            recents.push(announcement)
        }

        commit('setRecentAnnouncements', recents)
    },
    setPage({ commit }, page){
        commit('setPage', page)
    }
}

export const getters = {
    getPageAnnouncements: (state) => {
        // Subtract 1 to requested page to start from index
        // of Announcement array
        const start = (state.requestedPage - 1) * 6
        const end = state.requestedPage * 6
        return state.announcements.slice(start, end)
    },
    getMaxPageCount: (state) => {
        // Explanation: Each page has 6 Announcements [a],
        // If # of [a] divided by 6 has a remainder, add 
        // 1 extra page for remaining [a]
        const hasRemainder = state.announcements.length % 6 !== 0
        const extraPage = (hasRemainder) ? 1 : 0
        return Math.floor(state.announcements.length/6) + extraPage
    }
}