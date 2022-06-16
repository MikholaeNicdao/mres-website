import axios from 'axios'

export const state = () => ({
    events: [],
    recentEvents: []
})
  
export const mutations = {
    setEvents(state, eventData){
        state.events = eventData
    },
    setRecentEvents(state, recents){
        state.recentEvents = recents
    },
}

export const actions = {
    async fetchEvents({ commit }){
        try {
            const res = await axios.get("http://localhost:3306/api/v1/Events")

            commit('setEvents', res.data.description)

        }catch (error) {
            console.log(error)
        }
    },
    fetchRecentEvents({ commit, state }, req){
        const recents = []
        for(const event of state.events){
            if (event.id == req?.id) continue
            if (recents.length === req.count) break
            recents.push(event)
        }

        commit('setRecentEvents', recents)
    },
    async addEvent({dispatch}, formData){
        try {
            await axios.post("http://localhost:3306/api/v1/Events/add", formData, {headers: {
                'Content-Type': 'application/json',
            }})

            await dispatch('fetchEvents')

        }catch (error) {
            console.log(error)
        }
    },
    async updateEvent({ dispatch }, req){
        try {
            await axios.put("http://localhost:3306/api/v1/Events/update/" + req.id, req.formData)

            await dispatch('fetchEvents')

        }catch (error) {
            console.log(error.message)
        }
    },
    async deleteEvent({dispatch}, id){
        try {
            await axios.delete("http://localhost:3306/api/v1/Events/remove/" + id)

            await dispatch('fetchActivities')

        }catch (error) {
            console.log(error)
        }
    },
}
