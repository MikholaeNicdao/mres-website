<template>
  <div>
      <h2>Activities</h2>
      <nuxt-link to="/activities/add">Add activity</nuxt-link>
      <ul>
        <li v-for="activity in activities" :key="activity.id">
          <h3> {{ activity.title  }} </h3>
          <p> {{ activity.description }} </p>
          <img :src="`data:image/jpg; base64, ${activity.coverPhoto}`">
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'ActivitiesPage',
    beforeCreate(){
      this.$store.dispatch('activity/fetchActivities')
    },
    computed: {
        activities () {
            return this.$store.state.activity.activities
        }
    }
}
</script>
