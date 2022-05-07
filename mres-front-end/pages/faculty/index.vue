<template>
  <div>
      <h2>Activities</h2>
      <nuxt-link to="/faculty/add">Add faculty</nuxt-link>
      <ul>
        <li v-for="faculty in facultyList" :key="faculty.id">
          <p> {{ faculty.firstName + " " + faculty.lastName }} </p>
          <img :src="`data:image/jpg; base64, ${faculty.coverPhoto}`">
          <nuxt-link :to="`/faculty/${faculty.id}/edit`"> Edit </nuxt-link>
          <a @click="deleteFaculty(faculty.id)"> Delete </a> 
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'FacultyPage',
  beforeCreate(){
    this.$store.dispatch('faculty/fetchFaculty')
  },
  methods: {
    editFaculty(id){
      this.$store.dispatch('faculty/deleteFaculty', id)
    },
    deleteFaculty(id){
      this.$store.dispatch('faculty/deleteFaculty', id)
    }
  },
  computed: {
    facultyList(){
      return this.$store.state.faculty.facultyList
    }
  }
}
</script>