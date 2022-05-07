<template>
  <form @submit.prevent="$emit('on-submit', form)">
      <label for="title"> Title: </label>
      <input type="text" name="title" v-model="form.title" required>
      <label for="body"> Body: </label>
      <textarea name="body" v-model="form.body" required> </textarea>
      <label for="coverPhoto"> Cover Photo: </label>
      <input type="file" name="coverPhoto" id="coverPhotoField" required @change="handleFileUpload( $event )">
      <img id="coverPhotoPreview" src="">
      <input type="submit">
      <button>
        <nuxt-link to="/announcements">
          Go back to posts
        </nuxt-link>
      </button>
  </form>
</template>

<script>

export default {
  data(){
    const form = {
        title: "",
        body : "",
        coverPhoto : ""
    }

    let dataURL = ""
    return { form, dataURL }
  },
  methods: {
    handleFileUpload(event){
      const file = event.target.files[0]
      if(!this.isValidImage(file)) {
        alert("Invalid file!")
        document.getElementById("coverPhotoField").value = "";
        return
      }

      this.form.coverPhoto = event.target.files[0]
    },
    isValidImage(img) {
      const file = img;
      const fileType = file['type'];
      const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
      if (!validImageTypes.includes(fileType)) {
          return false
      }
      return true
    }   
  }
}
</script>

<style>

</style>