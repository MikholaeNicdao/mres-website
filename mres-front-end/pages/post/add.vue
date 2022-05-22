<template>
  <ActForm @on-submit="submit" />
</template>

<script>
export default {
  layout: 'adminView',
  methods: {
    submit(load){
      if (load.type === 'Announcement') {
        this.$store.dispatch('announcement/addAnnouncement', load.formData)
      }
      if (load.type === 'Activity') {
        this.$store.dispatch('activity/addActivity', load.formData)
      }

      if (confirm("Go to " + load.type + " page?")) {
        const pushToRoute = load.type === 'Announcement'
          ? '/admin/announcements'
          : '/admin/activities'
        this.$router.push(pushToRoute)
      }
    }
  }
}
</script>

<style>
.createPost {
  padding: 3% 4%;
  width: 80%;}

.postContainer {
  display: flex;}

.textContainer {
  border: 1px solid silver;
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  align-items: flex-end;}

.textContainer button[type='submit'] {
  padding: 5px;
  font-size: 16px;
  width: 100px;
  border: none;
  background: #329bd6;
  border-radius: 5px;
  margin: 5px;
  color: white;}

input#articleTitle {
  width: 100%;
  font-size: 22px;
  padding: 5px;
  border: none;
  border-bottom: 1px solid #e6e6e6;
  margin-top: 20px;
  font-weight: bold;}

.selectArticleType {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 5px;}

.selectArticleType #articleAuthor {
  width: 60%;
  padding: 5px;
  font-size: 14px;
  border: none;
  border-right: 1px solid #e6e6e6;}

select#articleType {
  width: 39%;
  border: none;
  color: #404040;
  font-size: 16px;}

.emphasis {
  padding: 5px 0;
  border-bottom: 1px solid #e6e6e6;
  width: 100%;
  display: flex;
  justify-content: flex-end;}

.emphasis button {
  font-size: 16px;
  width: 20px;
  margin-left: 7px;
  border: none;
  color: #404040;}

textarea#articleTextarea {
  width: 100%;
  margin: 5px 0;
  padding: 5px;
  border: none;
  height: 500px;
  font-size: 15px;}

.imageContainer {
  border: 1px solid silver;
  width: 29%;
  margin-left: 1%;
  height: 300px;
  padding: 5px;}

.imageBox {
  width: 100%;
  height: 235px;
  border: 1px solid silver;}

.imageBox img {
  width: 100%;
  height: auto;}

.imageContainer button {
  margin-top: 22px;
  width: 100px;
  padding: 1px;}

.textContainer button[type='submit']:hover {
  background: #1d6995;}
</style>