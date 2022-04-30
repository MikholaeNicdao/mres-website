<template>
  <div class="flex-column" v-if="adminLogged">
      <label for="title"> Title: </label>
      <input type="text" name="title" v-model="title">
      <label for="body"> Body: </label>
      <input type="text" name="body" v-model="body">
      <button @click="addAnnouncements({id:Object.keys(announcements).length+1, title, body})">Submit</button>
      <button>
        <nuxt-link to="/announcements">
          Go back to posts
        </nuxt-link>
      </button>
  </div>
  <div v-else>
    You need to be logged in to add posts
    <nuxt-link to="/login"> 
    Go to login 
    </nuxt-link>
  </div>
</template>

<script>

export default {
  data(){
    let title = ""
    let body = ""
    
    return { title, body }

  },
  computed: {
    announcements(){
        return this.$store.state.announcement.announcements
    },
    announcement(){
        return this.$store.state.announcement.announcement
    },
    adminLogged(){
        return this.$store.state.login.adminLogged
    }
  },
  methods: {
    addAnnouncements (announcement) {
      this.$store.commit('announcement/add', announcement)
      this.$router.push('/announcements')
    }
  }
}
</script>

<style>

</style>