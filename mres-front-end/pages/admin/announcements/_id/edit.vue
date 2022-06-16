<template>
  <PostForm @on-submit="updateAnnouncement" :postType="'Announcement'" />
</template>

<script>
export default {
  layout: 'adminView',
  head(){
      return{
          title: "Edit Announcement - Mauaque Resettlement Elementary School"
      }
  },
  methods: {
    updateAnnouncement (load) {
      this.$store.dispatch('announcement/updateAnnouncement', { id:this.$route.params.id, formData:load.formData })
      this.$router.push('/admin/announcements')
    }
  }
}
</script>