<template>
  <section>
    <div class="announcementPage">
        <h3>Announcements</h3>
        <nuxt-link to="/announcements/add"> Add announcement </nuxt-link>
        <div class="articleList">
          <AnnouncementCard v-for="announcement in pageAnnouncements" :key="announcement.id" :announcement="announcement" >
            <template v-slot:links>
              <nuxt-link
              :to="'announcements/' + announcement.id + '/edit'"> 
                Edit 
              </nuxt-link>
              <a @click="deleteAnnouncement(announcement.id)">
                Delete
              </a>
            </template>
          </AnnouncementCard>
        </div>
        <div class="pageBtn">
            <a v-if="requestedPage > 1" @click="prevPage"> &#60;&#60;  Previous</a>
            <p> Page {{ requestedPage }} of {{ lastPage }} </p>
            <a v-if="!isLastPage" @click="nextPage">Next  &#62;&#62;</a>
        </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AnnouncementsPage',
  async beforeCreate(){
    await this.$store.dispatch('announcement/fetchAnnouncements')
  },
  methods: {
    nextPage(){
        this.$store.dispatch('announcement/setPage', this.requestedPage + 1)
    },
    prevPage(){
      this.$store.dispatch('announcement/setPage', this.requestedPage - 1)
    },
    deleteAnnouncement (id) {
      this.$store.dispatch('announcement/deleteAnnouncement', id)
    }
  },
  computed: {
    announcements () {
      return this.$store.state.announcement.announcements
    },
    requestedPage(){
      return this.$store.state.announcement.requestedPage
    },
    isLastPage(){
      return this.requestedPage === this.lastPage
    },
    ...mapGetters({
      pageAnnouncements: 'announcement/getPageAnnouncements',
      lastPage: 'announcement/getMaxPageCount'
    })
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

.articleList {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
  flex-wrap: wrap;}

.pageBtn {
  display: flex;
  justify-content: center;
  margin-top: 30px;}

.pageBtn a {
  padding: 7px;
  border: 1px solid #329bd6;
  background: #329bd6;
  color: white;
  font-size: 14px;
  font-weight: 600;
  border-radius: 5px;
  width: 97px;
  margin: 0 10px;}

.pageBtn a:hover {
  background: #2278aa;}
</style>
