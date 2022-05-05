<template>
  <div class="post">
    <img class="announcementCover" :src="announcementCover">
    <h2 class="post-title">
        {{ announcement.title }}
    </h2>
    <p class="post-body">
        {{ announcement.description }}
    </p>
    <nuxt-link
    :to="'announcements/' + announcement.id + '/edit'"
    class="bordered button-color"> 
      Edit 
    </nuxt-link>
    <a @click="deleteAnnouncement(announcement.id)" class="bordered button-color">
      Delete
    </a>
    <hr>
  </div>
</template>

<script>

export default {
  name: 'Announcement',
  props: { 'announcement': Object },
  methods: {
    deleteAnnouncement (id) {
      this.$store.commit('announcement/delete', id)
    }
  },
  computed:{
    announcements(){
      return this.$store.state.announcement.announcements
    },
    announcementCover(){
      return "data:image/jpg; base64, " + this.announcement.coverPhoto
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
</style>
