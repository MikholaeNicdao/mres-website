import axios from 'axios'

export const state = () => ({
    activities: []
})
  
export const mutations = {
    setActivities(state, activityData){
        state.activities = activityData
    }
}

export const actions = {
    async fetchActivities({ commit }){
        try {
            let res = await axios.get("http://localhost:4000/api/v1/SchoolActivities")

            commit('setActivities', res.data.description)

        }catch (error) {
            console.log(error)
        }
    },
    async addActivity({dispatch}, formData){
        try {
            await axios.post("http://localhost:4000/api/v1/SchoolActivities/add", formData)

            await dispatch('fetchActivities')

        }catch (error) {
            console.log(error)
        }
    },
    async updateActivity({ dispatch }, req){
        try {
            await axios.put("http://localhost:4000/api/v1//Announcements/update/" + req.id, req.formData)

            await dispatch('fetchActivities')

        }catch (error) {
            console.log(error.message)
        }
    },
    async deleteActivity({dispatch}, id){
        try {
            await axios.delete("http://localhost:4000/api/v1/SchoolActivities/remove/" + id)

            await dispatch('fetchActivities')

        }catch (error) {
            console.log(error)
        }
    }
}
