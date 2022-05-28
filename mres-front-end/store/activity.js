import axios from 'axios'

export const state = () => ({
    activities: [],
    recentActivities: [],
    targetActivity: [],
    requestedPage: 1
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
    setPage(state, page){
        state.requestedPage = page
    },
    setDateString(state){
        for(const activity of state.activities){
            const date = new Date(activity.createdAt)
            const formattedDate = 
            `
                ${date.toLocaleString('default', { month: 'long' })} 
                ${date.getDate()}, 
                ${date.getFullYear()}
            `
            activity.createdAt = formattedDate
        }
    }
}

export const actions = {
    async fetchActivities({ dispatch, commit }){
        try {
            const res = await axios.get("http://localhost:3306/api/v1/SchoolActivities")

            commit('setActivities', res.data.description)
            commit('setDateString')

        }catch (error) {
            console.log(error)
        }
    },
    async fetchTargetActivity({ dispatch, commit }, id){
        try {
            const res = await axios.get("http://localhost:3306/api/v1/SchoolActivities/" + id)
            
            commit('setTargetActivity', res.data.description[0])

        }catch (error) {
            console.log(error)
        }
    },
    async addActivity({dispatch}, formData){
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
    async deleteActivity({dispatch}, id){
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
    },
    setPage({ commit }, page){
        commit('setPage', page)
    },
    setAuthors({ dispatch }, activities){
        for(const activity of activities){
            dispatch('setAuthor', activity)
        }
    }
}

export const getters = {
    getPageActivities: (state) => {
        // Subtract 1 to requested page to start from index
        // of activity array
        const start = (state.requestedPage - 1) * 6
        const end = state.requestedPage * 6
        return state.activities.slice(start, end)
    },
    getMaxPageCount: (state) => {
        // Explanation: Each page has 6 activity [a],
        // If # of [a] divided by 6 has a remainder, add 
        // 1 extra page for remaining [a]
        const hasRemainder = state.activities.length % 6 !== 0
        const extraPage = (hasRemainder) ? 1 : 0
        return Math.floor(state.activities.length/6) + extraPage
    }
}


