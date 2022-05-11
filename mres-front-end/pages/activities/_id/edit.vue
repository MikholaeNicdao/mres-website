<template>
  <div>
      <ActivityForm @on-submit="updateActivity" />
  </div>
</template>

<script>

export default {
  methods: {
    updateActivity (form) {
      let formData = new FormData();
      formData.append('title', form.title)
      formData.append('description', form.body)
      formData.append('coverPhoto', form.coverPhoto)
      this.$store.dispatch('activity/updateActivity', { id:this.$route.params.id, formData })
      this.$router.push('/activities')
    }
  }
}
</script>

<style>

</style>