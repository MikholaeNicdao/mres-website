<template>
    <div class="createPost">
        <form @submit.prevent="submit">
            <div class="postContainer">
                <div class="textContainer">
                    <button type="submit">Post</button>
                    <input v-model="form.title" type="text" name="articleTitle" id="articleTitle" placeholder="Title">
                    <div class="selectArticleType">
                        <input v-model="form.author" type="text" name="articleAuthor" id="articleAuthor" placeholder="Author">
                        <select v-model="type" name="articleType" id="articleType">
                            <option value="Announcement">Announcement</option>
                            <option value="Activity">School Activity</option>
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
export default {
  layout: 'adminView',
  mounted(){
    this.fetchDefaultImage()
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
        coverPhotoPreview: "/school.jpg",
        type: "Announcement",
        defaultImage: ""
    }
  },
  methods: {
    submit(){
      if (!this.form.coverPhoto) {
        this.form.coverPhoto = this.defaultImage
      }

      const form = this.toFormData(this.form)

      if (this.type === 'Announcement') {
        this.$store.dispatch('announcement/addAnnouncement', form)
      }
      if (this.type === 'Activity') {
        this.$store.dispatch('activity/addActivity', form)
      }

      if (confirm("Go to " + this.type + " page?")) {
        let pushToRoute = this.type === 'Announcement'
          ? '/announcements'
          : '/activities'
        this.$router.push(pushToRoute)
      }
    },
    toFormData(){
      const formData = new FormData()
      formData.append('title', this.form.title);
      formData.append('description', `${this.form.body}_${this.form.author}`);
      formData.append('coverPhoto', this.form.coverPhoto);
      return formData
    },
    handleFileUpload(event){
      this.form.coverPhoto = event.target.files[0]
      if (this.form.coverPhoto) {
          this.coverPhotoPreview = URL.createObjectURL(this.form.coverPhoto);
          return
      }
      this.form.coverPhoto = this.defaultImage
      this.coverPhotoPreview = "/school.jpg"
    },
    fetchDefaultImage(){
      fetch("/school.jpg")
      .then(response => response.blob())
      .then(data => this.defaultImage = data)
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