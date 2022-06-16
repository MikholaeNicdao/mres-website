<template>
  <PostForm @on-submit="updateActivity" :postType="'Activity'" />
</template>

<script>
export default {
  layout: 'adminView',
  head(){
      return{
          title: "Edit Activity - Mauaque Resettlement Elementary School"
      }
  },
  methods: {
    updateActivity (load) {
      this.$store.dispatch('activity/updateActivity', { id:this.$route.params.id, formData:load.formData })
      this.$router.push('/admin/activities')
    }
  }
}
</script>