<template>
  <div class="listContainer">
      <img :src="announcementCover"> 
      <div class="listContent">
          <div>
              <h4>{{ announcement.title }}</h4>
              <p> Posted {{ announcementDate }}</p>
          </div>
          <div>
              <nuxt-link :to="'/announcements/' + announcement.id ">Read more</nuxt-link>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Announcement',
  props: { 'announcement': Object },
  computed:{
    announcementCover(){
      return "data:image/jpg; base64, " + this.announcement.coverPhoto
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
.announcementCover{
    height: auto;
    width: 250px;
    object-fit: cover;
}
.articleList {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
  flex-wrap: wrap;}

.listContainer {
  text-align: left;
  background: #e6e6e6;
  padding: 25px;
  width: 300px;
  margin: 0 25px 40px;
  height: 430px;}

.listContainer img {
  width: 100%;
  min-height: 188px;
  object-fit: cover;
  height: auto;}

.listContent {
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  height: 169px;
  justify-content: space-between;}

.listContent h4 {
  font-size: 18px;
  color: #329bd6;}

.listContent p {
  color: gray;
  font-size: 15px;
  padding: 5px 0;}

.listContent a {
  color: #c2bd3d;}

.listContent a:hover {
  color: #747225;}
</style>
