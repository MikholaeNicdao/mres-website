<template>
  <div class="posts-container">
      <nuxt-link to="/announcements/add" class="bordered button-color"> Create Post </nuxt-link>
      <Announcement v-for="announcement in announcements" :key="announcement.id" :announcement="announcement" />
  </div>
</template>

<script>
export default {
  name: 'AnnouncementsPage',
  middleware: ['setAnnouncements'],
  computed: {
    announcements () {
      return this.$store.state.announcement.announcements
    }
  },
  methods:{
    setAnnouncements(){
      this.$store.dispatch('announcement/fetchAnnouncements')
    }
  }
}
</script>

<style>
.posts-container{
  margin: 0.5rem;
}

</style>
