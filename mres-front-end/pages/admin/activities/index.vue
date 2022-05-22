<template>
  <div id="adminAnnouncement">
    <div id="adminAnnouncementHeader">
        <h3>Activities</h3>
        <div>
            <nuxt-link to="/post/add"> Create New</nuxt-link>
            <div class="searchBar">
                <form>
                    <input type="text" name="search" id="search">
                    <button type="submit"></button>
                </form>
            </div>
        </div>
    </div>
    <div id="adminAnnouncementContent">
      <div class="adminContentContainer" v-for="activity in activities" :key="activity.id">
        <div class="adminContent">
          <img :src="'data:image/jpg; base64, ' + activity.coverPhoto">
          <div class="adminContentDetails">
              <h4> {{ activity.title }}</h4>
              <p>Posted {{ activity.createdAt }}</p>
              <div>
                  <nuxt-link :to="'/activities/' + activity.id" class="readMore"> Read More </nuxt-link>
                  <nuxt-link :to="'/admin/activities/' + activity.id + '/edit'" class="edit"> Edit </nuxt-link>
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
    await this.$store.dispatch('activity/fetchActivities')
  },
  methods: {
    nextPage(){
        this.$store.dispatch('activity/setPage', this.requestedPage + 1)
    },
    prevPage(){
      this.$store.dispatch('activity/setPage', this.requestedPage - 1)
    },
    deleteAnnouncement (id) {
      this.$store.dispatch('activity/deleteActivity', id)
    }
  },
  computed: {
    activities () {
      return this.$store.state.activity.activities
    },
    requestedPage(){
      return this.$store.state.activity.requestedPage
    },
    isLastPage(){
      return this.requestedPage === this.lastPage
    },
    ...mapGetters({
      pageActivities: 'activity/getPageAnnouncements',
      lastPage: 'activity/getMaxPageCount'
    })
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
  width: 100%;}

.adminContent {
  text-align: center;
  padding: 25px 20px;}

.adminContentDetails {
  text-align: left;
  margin: 10px 0;}

.adminContentDetails h4 {
  color: #329bd6;
  font-size: 18px;}

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