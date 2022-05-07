<template>
  <div>
      <AnnouncementForm @on-submit="updateAnnouncement" />
  </div>
</template>

<script>

export default {
  methods: {
    updateAnnouncement (form) {
      let formData = new FormData();
      formData.append('title', form.title)
      formData.append('description', form.body)
      formData.append('coverPhoto', form.coverPhoto)
      this.$store.dispatch('announcement/updateAnnouncement', { id:this.$route.params.id, formData })
      this.$router.push('/announcements')
    }
  }
}
</script>

<style>

</style>