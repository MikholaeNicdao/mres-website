<template>
  <PostForm @on-submit="submit" />
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