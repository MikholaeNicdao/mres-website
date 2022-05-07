<template>
  <section>
    <div class="announcementPage">
        <h3>Announcements</h3>
        <nuxt-link to="/announcements/add"> Add announcement </nuxt-link>
        <div class="articleList">
          <Announcement v-for="announcement in announcements" :key="announcement.id" :announcement="announcement" >
            <template v-slot:links>
              <nuxt-link
              :to="'announcements/' + announcement.id + '/edit'"> 
                Edit 
              </nuxt-link>
              <a @click="deleteAnnouncement(announcement.id)">
                Delete
              </a>
            </template>
          </Announcement>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AnnouncementsPage',
  beforeCreate(){
    this.$store.dispatch('announcement/fetchAnnouncements')
  },
  methods: {
    deleteAnnouncement (id) {
      this.$store.dispatch('announcement/deleteAnnouncement', id)
    }
  },
  computed: {
    announcements () {
      return this.$store.state.announcement.announcements
    }
  }
}
</script>

<style>
.announcementPage {
  padding: 3% 0;
  margin: 0 4%;
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  align-items: center;}

.announcementPage h3 {
  color: #404040;
  font-size: 28px;}
</style>
