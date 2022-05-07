<template>
  <form @submit.prevent="$emit('on-submit', form)" id="facultyForm">
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
        handleFileUpload(event){
            this.form.coverPhoto = event.target.files[0]
        }
    }
}
</script>

<style>

</style>