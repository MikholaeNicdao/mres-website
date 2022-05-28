<template>
  <div class="createFaculty">
    <client-only>
    <div class="createFacultyHeader">
        <h3>Faculty Member Information</h3>
        <div>
            <button @click="addForm" type="button" id="createNewFaculty">Add New</button>
            <button @click="submitForm" type="submit" id="saveFacultyBtn">Save</button>
        </div>
    </div>
    <FacultyForm v-for="form in formList"
    :key="formList.indexOf(form)" 
    :formKey="formList.indexOf(form)"
    :form="formList[formList.indexOf(form)]"
    @deleted="deleteForm" />
    </client-only>
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
      formList : 
      [
        {
            firstName: "",
            middleinitial: "",
            lastName: "",
            prefix: "",
            category: "",
            position: "",
            other: "",
            teacherPerGradeLevel: "",
            coverPhoto: this.defaultImage,
            coverPhotoPreview: require("~/assets/images/addFacultyImage.png")
        }
      ],
      defaultImage: ""
    }
  },
  methods: {
    async submitForm(){
      for(const form of this.formList){
        try {
          await this.addFaculty(form)
        } catch (error) {
          console.log(error)
          continue
        }
      }
      this.formList = []
      this.addForm()
    },
    formatForm(form){
      const prefix = {
        'School Division Officer': 'otherSDO_',
        'Teaching Staff': 'otherTS_',
        'Non-Teaching Staff': 'otherNTS_',
        'School Support Staff': 'otherSSS_',
      }
      if (!form.coverPhoto) {
        form.coverPhoto = this.defaultImage
      }

      // Append a prefix to position to determine
      // the category of the position when fetched 
      // from DB
      if (form.position === 'other'){
        form.position = prefix[form.category] + form.other
      }

    },
    addForm(){
      this.formList.push({ 
        firstName: "",
        middleinitial: "",
        lastName: "",
        prefix: "",
        category: "",
        position: "",
        other: "",
        teacherPerGradeLevel: "",
        coverPhoto: this.defaultImage,
        coverPhotoPreview: "/addFacultyImage.png"
      })
    },
    deleteForm(formKey){
      if (this.formList.length <= 1) {
        return
      }
      this.formList.splice(formKey, 1)
    },
    addFaculty(form) {
      this.formatForm(form)
      let formData = new FormData()
      formData.append('coverPhoto', form.coverPhoto);
      formData.append('teacherPerGradeLevel', form.teacherPerGradeLevel);
      formData.append('prefix', form.prefix);
      formData.append('firstName', form.firstName);
      formData.append('middleInitial', form.middleinitial);
      formData.append('lastName', form.lastName);
      formData.append('category', form.category);
      formData.append('position', form.position);
      this.$store.dispatch('faculty/addFaculty', formData)
    },
    fetchDefaultImage(){
      fetch("/addFacultyImage.png")
      .then(response => response.blob())
      .then(data => this.defaultImage = data)
    }
  }
}
</script>