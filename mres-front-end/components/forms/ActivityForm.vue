<template>
  <div v-if="dataResolved">
    <form @submit.prevent="submitted" class="annForm">
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
    </form>
    <button>
      <nuxt-link to="/activities">
        Go back to Activities page
      </nuxt-link>
    </button>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>
import validations from '~/plugins/validations.js'
import loading from '~/plugins/loading.js'

export default {
  mixins: [validations, loading],
  emits: ['on-submit'],
  async mounted(){
    if(this.$route.params?.id){
      await this.$store.dispatch("activity/fetchTargetActivity", this.$route.params.id)
      this.setDataResolved()
      this.assignDefaultValues()
    }
    else this.dataResolved = true
  },
  data(){
    return { 
      form : {
        title: "",
        body : "",
        coverPhoto : ""
      },
      coverPhotoPreview: "",
    }
  },
  methods: {
    submitted(){
      if (!this.form.coverPhoto) {
        alert("Please add a cover image")
        return
      }
      this.$emit('on-submit', this.form)
    },
    assignDefaultValues(){
      this.form.title = this.targetActivity.title
      this.form.body = this.targetActivity.description
      this.coverPhotoPreview = "data:image/jpg; base64, " + this.targetActivity.coverPhoto
    },
    async handleFileUpload(event){
      const file = event.target.files[0]
      const cp_field = document.getElementById("coverPhotoField")

      if (!file) {
        cp_field.value = "";
        if (this.$route.params?.id) {
          this.form.coverPhoto = await this.dataUrlToFile("data:image/jpg; base64, " + this.targetActivity.coverPhoto, "Default.png")
          this.coverPhotoPreview = "data:image/jpg; base64, " + this.targetActivity.coverPhoto;
        }
        else {
          this.form.coverPhoto = ""
          this.coverPhotoPreview = ""
        }
        return
      }
    
      if(!this.isValidImage(file)) {
        alert("Invalid file!")
        cp_field.value = "";
        return
      }

      this.coverPhotoPreview = URL.createObjectURL(file);

      this.form.coverPhoto = event.target.files[0]
    },
    async dataUrlToFile(dataUrl, fileName){
        const res = await fetch(dataUrl);
        const blob = await res.blob();
        console.log(new File([blob], fileName, { type: 'image/png' }))
        return new File([blob], fileName, { type: 'image/png' });
    }
  },
  computed:{
    targetActivity(){
      return this.$store.state.activity.targetActivity
    }
  }
}
</script>

<style>

</style>