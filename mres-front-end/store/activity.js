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
            await axios.post("http://localhost:4000/api/v1/SchoolActivities/Upload", formData)

            await dispatch('fetchActivities')

        }catch (error) {
            console.log(error)
        }
    }
}
