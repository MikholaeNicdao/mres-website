<template>
  <PostForm @on-submit="updateActivity" :postType="'Activity'" />
</template>

<script>
export default {
  layout: 'adminView',
  methods: {
    updateActivity (load) {
      this.$store.dispatch('activity/updateActivity', { id:this.$route.params.id, formData:load.formData })
      this.$router.push('/admin/activities')
    }
  }
}
</script>