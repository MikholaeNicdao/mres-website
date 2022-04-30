import Vue from 'vue'

export const state = () => ({
    announcements:
    {
        1: {
            id: 1,
            title: "Back to School yr. 2021-2022",
            body: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
            date: "August 28, 2020"
        },
        2: {
            id: 2,
            title: "Back to School yr. 2021-2022 (1)",
            body: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
            date: "August 28, 2020"
        },
        3: {
            id: 3,
            title: "Back to School yr. 2021-2022 (2)",
            body: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
            date: "August 28, 2020"
        },
    },
    announcement: { }
})
  
export const mutations = {
    add(state, announcement){
        state.announcements[announcement.id] = {
            id: announcement.id,
            title: announcement.title,
            body: announcement.body
        }
    },
    update(state, announcement) {
        state.announcements[announcement.id] = announcement
    },
    delete(state, id){
        Vue.delete(state.announcements, id)
    },
    setAnnouncement(state, id){
        state.announcement = state.announcements[id]
    }
}
