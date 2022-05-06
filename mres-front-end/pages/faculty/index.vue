<template>
  <div>
      <h2>Activities</h2>
      <nuxt-link to="/faculty/add">Add faculty</nuxt-link>
      <ul>
        <li v-for="faculty in facultyList" :key="faculty.id">
          <p> {{ faculty.firstName + " " + faculty.lastName }} </p>
          <img :src="`data:image/jpg; base64, ${faculty.coverPhoto}`">
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
  computed: {
    facultyList(){
      return this.$store.state.faculty.facultyList
    }
  }
}
</script>