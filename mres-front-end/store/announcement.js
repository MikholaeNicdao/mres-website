import Vue from 'vue'
import axios from 'axios'

export const state = () => ({
    announcements: [],
    announcement: { }
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
    setAnnouncement(state, id){
        state.announcement = state.announcements[id]
    }
}

export const actions = {
    async fetchAnnouncements({ commit }){
        try {
            let res = await axios.get("http://localhost:4000/MRES/Announcements")

            commit('setAnnouncements', res.data)

        }catch (error) {
            console.log(error)
        }
    },
    async addAnnouncement({ dispatch }, formData){
        try {
            await axios.post("http://localhost:4000/MRES/Announcements/Upload", formData)

            await dispatch('fetchAnnouncements')

        }catch (error) {
            console.log(error.message)
        }
    }
}

export const getters = {
    getTopAnnouncements: (state) => {
        return state.announcements.slice(0, 3)
    }
}
