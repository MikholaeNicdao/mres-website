<template>
  <div>
    <ActivityForm @on-submit="addActivity" />
  </div>
</template>

<script>

export default {
  methods: {
    addActivity(form) {
      let formData = new FormData()
      formData.append('title', form.title);
      formData.append('description', form.body);
      formData.append('coverPhoto', form.coverPhoto);
      this.$store.dispatch('activity/addActivity', formData)
      this.$router.push('/activities')
    },
    handleFileUpload(event){
      this.form.coverPhoto = event.target.files[0]
    }
  }
}
</script>