<template>
    <div v-if="activity" class="articlePage">
      <div class="article">
          <div class="articleContainer">
              <div class="headline">
                  <h4>Activity</h4>
                  <h3>{{ activity.title }}</h3>
              </div>
              <img :src="`data:image/jpg; base64, ${activity.coverPhoto}`">
              <div class="byline">
                  <div class="author"><p>By</p><p id="author">{{ activity.author }}</p></div>
                  <div class="postDate"><p>Posted {{ activityDate }} </p></div>
              </div>
              <div class="content">
                  <p v-html="activity.description"> </p>  
              </div>
          </div>
      </div>
      <div class="recentList" v-if="recentActivities">
          <h5>Activities</h5>
          <div class="recentArticle" v-for="activity in recentActivities" :key="activity.id">
              <img :src="`data:image/jpg; base64, ${activity.coverPhoto}`">
              <div class="recentHeadline">
                  <h5>{{ activity.title }}</h5>
                  <p>Posted {{ activity.createdAt }}</p>
                  <nuxt-link :to="'/activities/' + activity.id">Read more</nuxt-link>
              </div>
          </div>         
      </div>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>

export default {
  async beforeCreate(){
    await this.$store.dispatch('activity/fetchActivities')
    this.$store.dispatch('activity/fetchRecentActivities', 
    { 
      id:this.$route.params.id, 
      count:3
    })
  },
  methods: {
    deleteActivity(id){
      if (confirm("Are you sure? This cannot be undone.")) {
        this.$store.dispatch("activity/deleteActivity", id)
        this.$router.push("/activities")
      }
    }
  },
  computed:{
    recentActivities(){
      return this.$store.state.activity.recentActivities
    },
    activities() {
      return this.$store.state.activity.activities
    },
    activity() {
      return this.$store.state.activity.activities.find(a => a.id == this.$route.params.id )
    },
    activityDate(){
      const date = new Date(this.activity.createdAt)
      const formattedDate = `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`
      return formattedDate
    },
  }
}
</script>