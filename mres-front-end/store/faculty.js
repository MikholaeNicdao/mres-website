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
            let res = await axios.get("http://localhost:4000/api/v1/Faculty")

            console.log(res)

            commit('setFaculty', res.data.description)

        }catch (error) {
            console.log(error)
        }
    },
    async addFaculty({ dispatch }, formData){
        try {
            await axios.post("http://localhost:4000/api/v1/Faculty/AddFacultyMember", formData)

            await dispatch('fetchFaculty')
        }catch (error) {
            console.log(error)
        }
    }
}
