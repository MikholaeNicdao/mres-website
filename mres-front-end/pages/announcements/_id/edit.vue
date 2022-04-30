<template>
  <div class="flex-column" v-if="adminLogged && this.announcements.hasOwnProperty(this.$route.params.id)">
      <label for="title"> Title: </label>
      <input type="text" name="title" v-model="title">
      <label for="body"> Body: </label>
      <textarea name="body" v-model="body"> </textarea>
      <button class="button-color" @click="updateAnnouncements({ id:announcement.id, title, body })"> Update Post </button>
      <button class="button-color">
        <nuxt-link to="/announcements">
          Go back to posts
        </nuxt-link>
      </button>
  </div>
  <div v-else-if="!adminLogged">
    You need to be logged in to edit posts
  </div>
  <div v-else>
    Post doesn't exist
  </div>
</template>

<script>

export default {
  data(){
    let title = ""
    let body = ""

    return { title, body }
  },
  mounted(){
    if(this.announcements.hasOwnProperty(this.$route.params.id)){
      this.setAnnouncements(this.$route.params.id)
  
      this.title = this.announcement.title
      this.body = this.announcement.body
    }
  },
  computed: {
    announcements(){
      return this.$store.state.announcement.announcements
    },
    announcement(){
      return this.$store.state.announcement.announcements
    },
    adminLogged(){
      return this.$store.state.login.adminLogged
    }
  },
  methods: {
    updateAnnouncements (announcement) {
      this.$store.commit('announcement/update', announcement)
      this.$router.push('/announcements')
    },
    setAnnouncements(id){
      this.$store.commit('announcement/setAnnouncements', id)
    }
  }
}
</script>

<style>

</style>