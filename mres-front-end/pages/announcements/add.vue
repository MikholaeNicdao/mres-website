<template>
  <div>
      <AnnouncementForm @on-submit="addAnnouncement" />
  </div>
</template>

<script>

export default {
  methods: {
    addAnnouncement (form) {
      const formData = new FormData();
      formData.append('title', form.title)
      formData.append('description', form.body)
      formData.append('coverPhoto', form.coverPhoto)
      this.$store.dispatch('announcement/addAnnouncement', formData)
      this.$router.push('/announcements')
    }
  }
}
</script>

<style>

</style>