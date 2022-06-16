<template>
  <div id="adminAnnouncement" v-if="dataResolved">
    <div id="adminAnnouncementHeader">
        <h3>Announcements</h3>
        <div>
            <nuxt-link to="/admin/post/add"> <img src="/add.png"> Create New</nuxt-link>
            <div class="searchBar">
                <form>
                    <input v-model="search" type="text" name="search" id="search">
                    <button type="submit"><img src="/searchBtn.png"></button>
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
              <p>Posted {{ announcement.formattedCreatedAt }}</p>
              <div>
                  <nuxt-link :to="'/announcements/' + announcement.id" class="readMore"> Read More </nuxt-link>
                  <nuxt-link :to="'/admin/announcements/' + announcement.id + '/edit'" class="edit"> Edit </nuxt-link>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <LoadingDiv v-else />
</template>

<script>
import loading from '~/plugins/loading.js'

export default {
  layout: 'adminView',
  mixins: [loading],
  head(){
      return{
        title: "Announcements[Admin] - Mauaque Resettlement Elementary School"
      }
    },
  async mounted(){
    await this.$store.dispatch('announcement/fetchAnnouncements')
    this.setDataResolved()
  },
  data(){
    return {
      search: ""
    }
  },
  methods: {
    deleteAnnouncement (id) {
      this.$store.dispatch('announcement/deleteAnnouncement', id)
    }
  },
  computed: {
    announcements () {
      return this.$store.state.announcement.announcements
    },
    filteredAnnouncements(){
      if (!this.search.trim().length === 0) return this.announcements

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
  flex-direction: column;
  padding: 3% 4%;
  width: 80%;
}

#adminAnnouncement{
  padding: 3% 4%;
  width: 80%;}

div#adminAnnouncementHeader {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

div#adminAnnouncementHeader h3 {
  font-size: 25px;
  color: #404040;}

div#adminAnnouncementHeader div {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

div#adminAnnouncementHeader div a {
  color: #329bd6;
  font-size: 17px;
}

div#adminAnnouncementHeader div a img{
  width: 18px;
  margin-right: 5px;
  float: left;
  border-radius: 0;
}

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