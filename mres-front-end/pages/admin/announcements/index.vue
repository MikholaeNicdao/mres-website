<template>
  <div id="adminAnnouncement">
    <div id="adminAnnouncementHeader">
        <h3>Announcements</h3>
        <div>
            <nuxt-link to="/admin/post/add"> Create New</nuxt-link>
            <div class="searchBar">
                <form>
                    <input v-model="search" type="text" name="search" id="search">
                    <button type="submit"></button>
                </form>
            </div>
        </div>
    </div>
    <div id="adminAnnouncementContent">
      <div class="adminContentContainer" v-for="announcement in filteredAnnouncements" :key="announcement.id">
        <div class="adminContent">
          <img :src="'data:image/jpg; base64, ' + announcement.coverPhoto">
          <div class="adminContentDetails">
              <h4> {{ announcement.title }}</h4>
              <p>Posted {{ announcement.createdAt }}</p>
              <div>
                  <nuxt-link :to="'/announcements/' + announcement.id" class="readMore"> Read More </nuxt-link>
                  <nuxt-link :to="'/admin/announcements/' + announcement.id + '/edit'" class="edit"> Edit </nuxt-link>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'adminView',
  async beforeCreate(){
    await this.$store.dispatch('announcement/fetchAnnouncements')
  },
  data(){
    return {
      search: ""
    }
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
    }),
    filteredAnnouncements(){
      const fAnnouncements = []

      if (!this.search) return this.pageAnnouncements

      return this.announcements.filter(a => 
        a.title.includes(this.search) || 
        a.description.includes(this.search)
      )
    }
  }
}
</script>

<style>
div#adminAnnouncement {
  display: flex;
  flex-direction: column;}

#adminAnnouncement{
  padding: 3% 4%;
  width: 80%;}

div#adminAnnouncementHeader {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-end;}

div#adminAnnouncementHeader h3 {
  font-size: 25px;
  color: #404040;}

div#adminAnnouncementHeader div {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding-left: 60px;}

div#adminAnnouncementHeader div a {
  color: #329bd6;
  font-size: 17px;}

div#adminAnnouncementHeader div a:hover {
  color: #1d6995;}

/* Content */

div#adminAnnouncementContent {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;}

.adminContentContainer {
  background: #e6e6e6;
  width: 280px;
  border-radius: 5px;
  margin: 10px 0;}

.adminContentContainer img {
  width: 100%;
  /* My Additions */
  object-fit: cover;
  height: 180px;
}

.adminContent {
  text-align: center;
  padding: 25px 20px;}

.adminContentDetails {
  text-align: left;
  margin: 10px 0;}

.adminContentDetails h4 {
  color: #329bd6;
  font-size: 18px;
  /* My Additions */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.adminContentDetails p {
  color: gray;
  font-size: 14px;}

.adminContentDetails div {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  font-size: 15px;}

.adminContentDetails a {
  color: #c2bd3d;}

.adminContentDetails a:hover {
  color: #aeaa37;}
</style>