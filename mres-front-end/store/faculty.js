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
            let res = await axios.get("http://localhost:3306/api/v1/Faculty/")

            commit('setFaculty', res.data.description)

        }catch (error) {
            console.log(error)
        }
    },
    async addFaculty({ dispatch }, formData){
        try {
            const res = await axios.post("http://localhost:3306/api/v1/Faculty/add/member", formData)

            console.log(res.data)

            await dispatch('fetchFaculty')
        }catch (error) {
            console.log(error)
        }
    },
    async updateFaculty({ dispatch }, req){
        try {
            await axios.put("http://localhost:3306/api/v1/Faculty/update/member/" + req.id, req.formData)

            alert("Faculty Updated Successfully")

            await dispatch('fetchFaculty')

        }catch (error) {
            console.log(error.message)
        }
    },
    async deleteFaculty({ dispatch }, id){
        try {
            await axios.delete("http://localhost:3306/api/v1/Faculty/remove/" + id)

            await dispatch('fetchFaculty')

        }catch (error) {
            console.log(error.message)
        }
    },
    formatData(context, facultyList){
        const category = {
            "School Division Officer":["Schools Division Superintendent"],
            "Teaching Staff":["Schools Division Superintendent"],
            "School Division Officer":["Schools Division Superintendent"],
            "School Division Officer":["Schools Division Superintendent"]
        }
        for(const faculty of facultyList){
            const i = faculty.position.indexOf('_');
            announcement['author'] = announcement.description.slice(i+1)
            announcement['description'] = announcement.description.slice(0,i)
        }
    }
}
