<template>
  <div class="post">
    <h2 class="post-title">
        {{ announcement.title }}
    </h2>
    <nuxt-link
    v-if="adminLogged" 
    :to="'announcements/' + announcement.id + '/edit'"
    class="bordered button-color"> 
      Edit 
    </nuxt-link>
    <a v-if="adminLogged" @click="deleteAnnouncement(announcement.id)" class="bordered button-color">
      Delete
    </a>
    <p class="post-body">
        {{ announcement.body }}
    </p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Announcement',
  props: { 'announcement': Object },
  methods: {
    deleteAnnouncement (id) {
      this.$store.commit('announcement/delete', id)
    },

    ...mapMutations({
      delete: 'announcement/delete',
    })
  },
  computed:{
    announcements(){
      return this.$store.state.announcement.announcements
    },
    adminLogged(){
      return this.$store.state.login.adminLogged
    }
  }
}
</script>
