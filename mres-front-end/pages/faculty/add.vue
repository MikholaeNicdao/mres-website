<template>
  <form @submit.prevent="addFaculty()" class="flex-column" id="facultyForm">
      <label for="firstName"> First name: </label>
      <input type="text" name="firstName" v-model="form.firstName" required>
      <label for="middleinitial"> Middle Initial: </label>
      <input type="text" name="middleinitial" v-model="form.middleinitial" required>
      <label for="lastName"> Last name: </label>
      <input type="text" name="lastName" v-model="form.lastName" required>
      <label for="prefix"> Prefix: </label>
      <input type="text" name="prefix" v-model="form.prefix">
      <label for="position"> Position: </label>
      <input type="text" name="position" v-model="form.position" required>
      <label for="teacherPerGradeLevel"> Teacher per grade level: </label>
      <input type="text" name="teacherPerGradeLevel" v-model="form.teacherPerGradeLevel" required>
      <label for="coverPhoto"> Cover Photo: </label>
      <input type="file" name="coverPhoto" @change="handleFileUpload( $event )" required>
      <input type="submit">
      <button>
        <nuxt-link to="/faculty">
          Go back to faculty page
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
      firstName: "",
      middleinitial: "",
      lastName: "",
      prefix: "",
      position: "",
      teacherPerGradeLevel: "",
      coverPhoto: "",
    }
    
    return { form }

  },
  methods: {
    addFaculty() {
      let formData = new FormData()
      formData.append('coverPhoto', this.form.coverPhoto);
      formData.append('teacherPerGradeLevel', this.form.teacherPerGradeLevel);
      formData.append('prefix', this.form.prefix);
      formData.append('firstName', this.form.firstName);
      formData.append('middleInitial', this.form.middleinitial);
      formData.append('lastName', this.form.lastName);
      formData.append('position', this.form.position);
      this.$store.dispatch('faculty/addFaculty', formData)
      this.$router.push('/faculty')
    },
    handleFileUpload(event){
      this.form.coverPhoto = event.target.files[0]
    }
  }
}
</script>