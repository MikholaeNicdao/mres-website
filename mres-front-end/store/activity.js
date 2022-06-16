import axios from 'axios'
import { formatPost } from '../plugins/textformatter.js'

export const state = () => ({
    activities: [],
    recentActivities: [],
    pageActivities: [],
    targetActivity: [],
    requestedPage: 1,
    activitiesPerPage: 8,
    pageCount: 0
})
  
export const mutations = {
    setActivities(state, activityData){
        state.activities = activityData
    },
    setRecentActivities(state, recents){
        state.recentActivities = recents
    },
    setTargetActivity(state, activity){
        state.targetActivity = activity
    },
    setPageActivities(state, activities){
        state.pageActivities = activities
    },
    formatActivities(state){
        for(const activity of state.activities){
            activity = formatPost(activity)
        }
        for (const activity of state.recentActivities) {
            activity = formatPost(activity)
        }
        for (const activity of state.pageActivities) {
            activity = formatPost(activity)
        }
        state.targetActivity = formatPost(state.targetActivity)
    }
}

export const actions = {
    async fetchActivities({ commit }){
        try {
            const res = await axios.get("http://localhost:3306/api/v1/SchoolActivities")

            commit('setActivities', res.data.description)
            commit('formatActivities')

        }catch (error) {
            console.log(error)
        }
    },
    async fetchTargetActivity({ commit }, id){
        try {
            const res = await axios.get("http://localhost:3306/api/v1/SchoolActivities/" + id)
            
            commit('setTargetActivity', res.data.description[0])
            commit('formatActivities')

        }catch (error) {
            console.log(error)
        }
    },
    async fetchPageActivities({ commit }, page){
        try {
            const res = await axios.get("http://localhost:3306/api/v1/SchoolActivities/page/" + page)

            console.log(res.data.description)
            
            commit('setPageActivities', res.data.description)
            commit('setPageCount', res.data.pageCount)
            commit('formatActivities')

        }catch (error) {
            console.log(error)
        }
    },
    async addActivity({ dispatch }, formData){
        try {
            await axios.post("http://localhost:3306/api/v1/SchoolActivities/add", formData)

            await dispatch('fetchActivities')

        }catch (error) {
            console.log(error)
        }
    },
    async updateActivity({ dispatch }, req){
        try {
            await axios.put("http://localhost:3306/api/v1/SchoolActivities/update/" + req.id, req.formData)

            await dispatch('fetchActivities')

        }catch (error) {
            console.log(error.message)
        }
    },
    async deleteActivity({ dispatch }, id){
        try {
            await axios.delete("http://localhost:3306/api/v1/SchoolActivities/remove/" + id)

            await dispatch('fetchActivities')

        }catch (error) {
            console.log(error)
        }
    },
    fetchRecentActivities({ commit, state }, req){
        const recents = []
        for(const activity of state.activities){
            if (activity.id == req.id) continue
            if (recents.length === req.count) break
            recents.push(activity)
        }

        commit('setRecentActivities', recents)
    }
}
