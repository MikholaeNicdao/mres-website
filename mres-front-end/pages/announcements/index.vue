<template>
  <div class="posts-container">
      <nuxt-link to="/announcements/add" class="bordered button-color" v-if="adminLogged"> Create Post </nuxt-link>
      <Announcement v-for="announcement in announcements" :key="announcement.id" :announcement="announcement" />
  </div>
</template>

<script>

export default {
  name: 'PostPage',
  computed: {
    announcements () {
      return this.$store.state.announcement.announcements
    },

    adminLogged(){
        return this.$store.state.login.adminLogged
    }
  }
}
</script>

<style>
.posts-container{
  margin: 0.5rem;
}

</style>
