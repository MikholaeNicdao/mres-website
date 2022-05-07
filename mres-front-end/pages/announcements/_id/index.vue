<template>
    <div v-if="announcement" class="articlePage">
      <div class="article">
          <div class="articleContainer">
              <div class="headline">
                  <h4>Announcement</h4>
                  <h3>{{ announcement.title }}</h3>
              </div>
              <img :src="`data:image/jpg; base64, ${announcement.coverPhoto}`">
              <div class="byline">
                  <div class="author"><p>By</p><p id="author">Author</p></div>
                  <div class="postDate"><p>Posted {{ announcementDate }} </p></div>
              </div>
              <div class="content">
                  
                  <p> {{ announcement.description }} </p>    
              </div>
          </div>
      </div>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>

export default {
  beforeCreate(){
    this.$store.dispatch('announcement/fetchAnnouncements')
  },
  computed:{
    announcement() {
      return this.$store.state.announcement.announcements.find(a => a.id == this.$route.params.id )
    },
    announcementDate(){
      const date = new Date(this.announcement.createdAt)
      const formattedDate = `${date.toLocaleString('default', { month: 'long' })} ${date.getDay()}, ${date.getFullYear()}`
      return formattedDate
    }
  }
}
</script>

<style>
.articlePage {
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 510px;}

.article {
  width: 65%;
  padding: 50px 30px 150px 63px;}

.articleContainer img {
  width: 100%;
  height: auto;
  margin: 20px 0;}

.headline h4 {
  color: dimgray;
  font-weight: normal;
  font-size: 16px;}

.headline h3 {
  font-size: 35px; 
  padding: 2px 0;}

.postDate {
  display: flex;}

.byline p {
  color: gray;
  font-size: 16px;
  padding: 3px 0;
  margin-right: 5px;}

p#author {
  color: #329bd6;
  font-size: 20px;}

.author p {
  display: flex;
  align-items: center;
  align-content: space-between;
  color: black;}

.content p {
  font-size: 18px;}

.content {
  margin-top: 20px;}

</style>