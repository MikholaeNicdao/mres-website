<template>
  <div class="posts-container">
      <nuxt-link to="/announcements/add" class="bordered button-color"> Create Post </nuxt-link>
      <Announcement v-for="announcement in announcements" :key="announcement.id" :announcement="announcement" />
  </div>
</template>

<script>
export default {
  name: 'AnnouncementsPage',
  beforeCreate(){
    this.$store.dispatch('announcement/fetchAnnouncements')
  },
  computed: {
    announcements () {
      return this.$store.state.announcement.announcements
    }
  }
}
</script>

<style>
.posts-container{
  margin: 0.5rem;
}
</style>
