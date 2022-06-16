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
              <div class="author">
                <p>By</p>
                <p id="author"> {{ announcement.author }}</p>
              </div>
              <div class="postDate"><p>Posted {{ announcementDate }} </p></div>
            </div>
            <div class="content">
              <p v-html="announcement.description"></p>    
            </div>
          </div>
      </div>
      <div class="recentList" v-if="recentAnnouncements">
        <h5>Announcements</h5>
        <div class="recentArticle" v-for="announcement in recentAnnouncements" :key="announcement.id">
          <img :src="`data:image/jpg; base64, ${announcement.coverPhoto}`">
          <div class="recentHeadline">
            <h5>{{ announcement.title }}</h5>
            <p>Posted {{ announcement.formattedCreatedAt }}</p>
            <nuxt-link :to="'/announcements/' + announcement.id">Read more</nuxt-link>
          </div>
        </div>         
      </div>
  </div>
  <LoadingDiv v-else />
</template>

<script>

export default {
  async beforeCreate(){
    await this.$store.dispatch('announcement/fetchAnnouncements')
    this.$store.dispatch('announcement/fetchRecentAnnouncements', 
    { 
      id:this.$route.params.id, 
      count:3
    })
  },
  methods:{
    async deleteAnnouncement(id){
      await this.$store.dispatch("announcement/deleteAnnouncement", id)
      // When landing to this page, set requested page to 1
      await this.$store.dispatch('announcement/setPage', 1)
      this.$router.push("/announcements")
    }
  },
  computed:{
    recentAnnouncements(){
      return this.$store.state.announcement.recentAnnouncements
    },
    announcement() {
      return this.$store.state.announcement.announcements.find(a => a.id == this.$route.params.id )
    },
    announcementDate(){
      const date = new Date(this.announcement.createdAt)
      const formattedDate = `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`
      return formattedDate
    }
  }
}
</script>

<style>
.recentHeadline a {
  color: #c2bd3d;
  font-size: 14px;
}
</style>