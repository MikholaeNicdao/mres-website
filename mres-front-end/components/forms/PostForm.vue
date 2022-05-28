<template>
  <div class="createPost" v-if="dataResolved">
    <form @submit.prevent="submit">
      <div class="postContainer">
        <div class="textContainer">
          <button type="submit">Post</button>
          <input v-model="form.title" type="text" name="articleTitle" id="articleTitle" placeholder="Title">
          <div class="selectArticleType">
            <input v-model="form.author" type="text" name="articleAuthor" id="articleAuthor" placeholder="Author">
            <select v-if="isEditMode" v-model="type" name="articleType" id="articleType" disabled>
              <option v-if="postType === 'Activity'" value="Activity">School Activity</option>
              <option v-if="postType === 'Announcement'" value="Announcement">Announcement</option>
            </select>
            <select v-else v-model="type" name="articleType" id="articleType" :disabled="isEditMode">
              <option value="Activity">School Activity</option>
              <option value="Announcement">Announcement</option>
            </select>
          </div>
          <div class="emphasis">
            <button type="button"><b>B</b></button>
            <button type="button"><i>I</i></button>
            <button type="button">u</button>
          </div>
          <textarea v-model="form.body" name="articleTextarea" id="articleTextarea" cols="30" rows="10"></textarea>
        </div>
        <div class="imageContainer">
          <div class="imageBox">
            <img :src="coverPhotoPreview">
          </div>
          <button type="button">
            <label for="postImage"> Add image </label>
            <input @change="handleFileUpload" type="file" id="postImage" style="display: none"> 
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import validations from '~/plugins/validations.js'

export default {
  layout: 'adminView',
  mixins: [validations],
  emits: ['on-submit'],
  props: ['postType'],
  async mounted(){
    await this.fetchDefaultImage()

    if(this.$route.params?.id){
      const fetchAction = this.postType === 'Activity'
        ? "activity/fetchTargetActivity"
        : "announcement/fetchTargetAnnouncement"

      await this.$store.dispatch(fetchAction, this.$route.params.id)
      this.assignDefaultValues()
      this.dataResolved = true
    }
    else {
      this.form.coverPhoto = this.defaultImage
      this.coverPhotoPreview = "/school.jpg"
      this.dataResolved = true
    }
  },
  data(){
    return {
        form: 
        {
          title : "",
          body: "",
          coverPhoto: "",
          author: "",
        },
        coverPhotoPreview: "",
        type: this.postType || "Activity",
        defaultImage: "",
        isEditMode: !!this.$route.params?.id,
        dataResolved: false
    }
  },
  methods: {
    submit(){
      const formData = this.toFormData(this.form)

      this.$emit('on-submit', { formData, type: this.type })
    },
    async assignDefaultValues(){
      this.form.title =  this.targetPost.title
      this.form.body = this.targetPost.description
      this.form.coverPhoto = await this.dataUrlToFile("data:image/jpg; base64, " + this.targetPost.coverPhoto, "Default.png")
      this.form.author = this.targetPost.author
      this.defaultImage = this.form.coverPhoto
      this.coverPhotoPreview = "data:image/jpg; base64, " + this.targetPost.coverPhoto
    },
    toFormData(){
      const formData = new FormData()
      formData.append('title', this.form.title);
      formData.append('description', this.form.body);
      formData.append('coverPhoto', this.form.coverPhoto);
      formData.append('author', this.form.author)
      return formData
    },
    handleFileUpload(event){
      this.form.coverPhoto = event.target.files[0]
      if (this.form.coverPhoto) {
        this.coverPhotoPreview = URL.createObjectURL(this.form.coverPhoto);
        return
      }
      else{
        this.form.coverPhoto = this.defaultImage
      }
    
      if(!this.isValidImage(this.form.coverPhoto)) {
        alert("Invalid file!")
      }

      this.form.coverPhoto = this.defaultImage
      this.coverPhotoPreview = URL.createObjectURL(this.defaultImage);
    },
    async fetchDefaultImage(){
      await fetch("/school.jpg")
      .then(response => response.blob())
      .then(data => this.defaultImage = data)
    },
    async dataUrlToFile(dataUrl, fileName){
        const res = await fetch(dataUrl);
        const blob = await res.blob();
        return new File([blob], fileName, { type: 'image/png' });
    }
  },
  computed:{
    targetActivity(){
      return this.$store.state.activity.targetActivity
    },
    targetAnnouncement(){
      return this.$store.state.announcement.targetAnnouncement
    },
    targetPost(){
      return this.postType === 'Activity'
        ? this.targetActivity
        : this.targetAnnouncement
    }
  }
}
</script>

<style>
.createPost {
  padding: 3% 4%;
  width: 80%;}

.postContainer {
  display: flex;}

.textContainer {
  border: 1px solid silver;
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  align-items: flex-end;}

.textContainer button[type='submit'] {
  padding: 5px;
  font-size: 16px;
  width: 100px;
  border: none;
  background: #329bd6;
  border-radius: 5px;
  margin: 5px;
  color: white;}

input#articleTitle {
  width: 100%;
  font-size: 22px;
  padding: 5px;
  border: none;
  border-bottom: 1px solid #e6e6e6;
  margin-top: 20px;
  font-weight: bold;}

.selectArticleType {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 5px;}

.selectArticleType #articleAuthor {
  width: 60%;
  padding: 5px;
  font-size: 14px;
  border: none;
  border-right: 1px solid #e6e6e6;}

select#articleType {
  width: 39%;
  border: none;
  color: #404040;
  font-size: 16px;}

.emphasis {
  padding: 5px 0;
  border-bottom: 1px solid #e6e6e6;
  width: 100%;
  display: flex;
  justify-content: flex-end;}

.emphasis button {
  font-size: 16px;
  width: 20px;
  margin-left: 7px;
  border: none;
  color: #404040;}

textarea#articleTextarea {
  width: 100%;
  margin: 5px 0;
  padding: 5px;
  border: none;
  height: 500px;
  font-size: 15px;}

.imageContainer {
  border: 1px solid silver;
  width: 29%;
  margin-left: 1%;
  height: 300px;
  padding: 5px;}

.imageBox {
  width: 100%;
  height: 235px;
  border: 1px solid silver;}

.imageBox img {
  width: 100%;
  height: auto;}

.imageContainer button {
  margin-top: 22px;
  width: 100px;
  padding: 1px;}

.textContainer button[type='submit']:hover {
  background: #1d6995;}
</style>