<template>
  <form @submit.prevent="addActivity()" class="flex-column">
      <label for="title"> Title: </label>
      <input type="text" name="title" v-model="form.title" required>
      <label for="body"> Body: </label>
      <input type="text" name="body" v-model="form.body" required>
      <label for="coverPhoto"> Cover Photo: </label>
      <input type="file" name="coverPhoto" @change="handleFileUpload( $event )" required>
      <input type="submit">
      <button>
        <nuxt-link to="/activities">
          Go back to posts
        </nuxt-link>
      </button>
  </form>
  <!-- <div v-else>
    You need to be logged in to add posts
    <nuxt-link to="/login"> 
    Go to login 
    </nuxt-link>
  </div> -->
</template>

<script>

export default {
  data(){
    const form = {
      title: "",
      body: "",
      coverPhoto: "",
    }
    
    return { form }

  },
  methods: {
    addActivity() {
      let formData = new FormData()
      formData.append('title', this.form.title);
      formData.append('description', this.form.body);
      formData.append('coverPhoto', this.form.coverPhoto);
      this.$store.dispatch('activity/addActivity', formData)
      this.$router.push('/activities')
    },
    handleFileUpload(event){
      this.form.coverPhoto = event.target.files[0]
    }
  }
}
</script>