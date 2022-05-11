<template>
  <form @submit.prevent="$emit('on-submit', form)" class="annForm" v-if="dataResolved">
      <label for="title"> Title: </label>
      <input type="text" name="title" v-model="form.title" required>
      <label for="body"> Body: </label>
      <textarea name="body" v-model="form.body" required> </textarea>
      <label for="coverPhoto"> Cover Photo: </label>
      <input type="file" 
      name="coverPhoto" 
      id="coverPhotoField"  
      @change="handleFileUpload( $event )">
      <img id="coverPhotoPreview" 
      :src="coverPhotoPreview"
      alt="No image selected">
      <input type="submit">
      <button>
        <nuxt-link to="/announcements">
          Go back to posts
        </nuxt-link>
      </button>
  </form>
  <div v-else>
    Loading...
  </div>
</template>

<script>
import validations from '~/plugins/validations.js'

export default {
  mixins: [validations],
  async mounted(){
    if(this.$route.params?.id){
      await this.$store.dispatch("announcement/fetchTargetAnnouncement", this.$route.params.id)
      this.dataResolved = true
      this.assignDefaultValues()
    }
    else this.dataResolved = true
  },
  data(){
    return { 
      form: {
        title: "",
        body : "",
        coverPhoto : ""
      },
      coverPhotoPreview: "",
      dataResolved: false
    }
  },
  methods: {
    assignDefaultValues(){
      this.form.title = this.targetAnnouncement.title
      this.form.body = this.targetAnnouncement.description
      this.coverPhotoPreview = "data:image/jpg; base64, " + this.targetAnnouncement.coverPhoto
    },
    handleFileUpload(event){
      const file = event.target.files[0]
      const cp_field = document.getElementById("coverPhotoField")

      if (!file) {
        cp_field.value = "";
        this.form.coverPhoto = this.dataUrlToFile("data:image/jpg; base64, " + this.targetAnnouncement.coverPhoto, "Default.png");
        this.coverPhotoPreview = "data:image/jpg; base64, " + this.targetAnnouncement.coverPhoto;
        return
      }
    
      if(!this.isValidImage(file)) {
        alert("Invalid file!")
        cp_field.value = "";
        return
      }

      this.coverPhotoPreview = URL.createObjectURL(file);

      this.form.coverPhoto = event.target.files[0]

    }
  },
  computed:{
    targetAnnouncement(){
      return this.$store.state.announcement.targetAnnouncement
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