<template>
  <div>
      <FacultyForm @on-submit="updateFaculty" />
  </div>
</template>

<script>

export default {
    data(){
        const formData = new FormData()

        return { formData }
    },
    methods: {
        formDatafy(form){
            this.formData = new FormData()
            this.formData.append('coverPhoto', form.coverPhoto)
            this.formData.append('teacherPerGradeLevel', form.teacherPerGradeLevel)
            this.formData.append('prefix', form.prefix)
            this.formData.append('firstName', form.firstName)
            this.formData.append('middleInitial', form.middleinitial)
            this.formData.append('lastName', form.lastName)
            this.formData.append('position', form.position)
        },
        updateFaculty (form) {
            this.formDatafy(form)
            this.$store.dispatch('faculty/updateFaculty', { 
                id:this.$route.params.id, 
                formData:this.formData 
            })

            this.$router.push('/faculty')
        }
  }
}
</script>

<style>

</style>