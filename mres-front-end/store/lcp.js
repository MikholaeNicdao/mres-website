import axios from 'axios'

export const state = () => ({
    slides: [],
})
  
export const mutations = {
    setSlides(state, eventData){
        state.slides = eventData
    }
}

export const actions = {
    async fetchSlides({ commit }){
        try {
            const res = await axios.get("http://localhost:3306/api/v1/LearningContinuityPlan")

            commit('setSlides', res.data.description)

        }catch (error) {
            console.log(error)
        }
    },
    async addSlides({dispatch}, formData){
        try {
            await axios.post("http://localhost:3306/api/v1/LearningContinuityPlan/add", formData, {headers: {
                'Content-Type': 'application/json',
            }})

            await dispatch('fetchSlides')

        }catch (error) {
            console.log(error)
        }
    },
    async updateSlide({ dispatch }, req){
        try {
            await axios.put("http://localhost:3306/api/v1/LearningContinuityPlan/update/" + req.id, req.formData)

            await dispatch('fetchSlides')

        }catch (error) {
            console.log(error.message)
        }
    },
    async deleteSlide({dispatch}, id){
        try {
            await axios.delete("http://localhost:3306/api/v1/LearningContinuityPlan/remove/" + id)

            await dispatch('fetchSlides')

        }catch (error) {
            console.log(error)
        }
    },
}
