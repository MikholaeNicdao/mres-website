import axios from 'axios'

export const state = () => ({
    facultyList: [],
    selectedfaculty: { }
})
  
export const mutations = {
    setFaculty(state, facultyData){
        state.facultyList = facultyData
    }
}

export const actions = {
    async fetchFaculty({ commit }){
        try {
            let res = await axios.get("http://localhost:4000/api/v1/Faculty/")

            commit('setFaculty', res.data.description)

        }catch (error) {
            console.log(error)
        }
    },
    async addFaculty({ dispatch }, formData){
        try {
            await axios.post("http://localhost:4000/api/v1/Faculty/add/member", formData)

            await dispatch('fetchFaculty')
        }catch (error) {
            console.log(error)
        }
    },
    async updateFaculty({ dispatch }, req){
        try {
            await axios.put("http://localhost:4000/api/v1//Faculty/update/member/" + req.id, req.formData)

            await dispatch('fetchFaculty')

        }catch (error) {
            console.log(error.message)
        }
    },
    async deleteFaculty({ dispatch }, id){
        try {
            await axios.delete("http://localhost:4000/api/v1/Faculty/remove/" + id)

            await dispatch('fetchFaculty')

        }catch (error) {
            console.log(error.message)
        }
    }
}
