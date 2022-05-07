<template>
  <form @submit.prevent="$emit('on-submit', form)" class="annForm">
      <label for="title"> Title: </label>
      <input type="text" name="title" v-model="form.title" required>
      <label for="body"> Body: </label>
      <textarea name="body" v-model="form.body" required> </textarea>
      <label for="coverPhoto"> Cover Photo: </label>
      <input type="file" 
      name="coverPhoto" 
      id="coverPhotoField" 
      required 
      @change="handleFileUpload( $event )">
      <img id="coverPhotoPreview" 
      alt="No image selected">
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
      const cp_field = document.getElementById("coverPhotoField")
      const cp_preview = document.getElementById("coverPhotoPreview")

      if (!file) {
        cp_field.value = "";
        cp_preview.src = "";
        return
      }
    
      if(!this.isValidImage(file)) {
        alert("Invalid file!")
        cp_field.value = "";
        return
      }

      cp_preview.src = URL.createObjectURL(file);

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
.annForm{
  display: flex;
  flex-direction: column;
  margin: 2rem 2rem;
}

.annForm label, .annForm button{
  margin: 0.2rem 0.2rem;
}
</style>