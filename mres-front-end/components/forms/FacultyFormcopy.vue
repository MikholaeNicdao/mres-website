<template>
    <client-only>
  <form @submit.prevent="handleSubmit" @click="print(formKey)">
        <div class="createFacultyContainer">
            <button @click="deleteForm" type="button">
                <img src="~/assets/images/delete.png">
            </button>
            <div class="facultyDetails">
                <div class="imageFaculty">
                    <label :for="'facultyImage' + formKey"> 
                        <img class="addFacultyImage" 
                        id='facultyImagePreview' :src="coverPhotoPreview">
                    </label>
                    <input @change="handleFileUpload" 
                    type="file" class="addFacultyField" 
                    :id="'facultyImage' + formKey">
                </div>
                <div class="inputFaculty">
                    <div class="nameFaculty">
                        <table>
                            <tr>
                                <th><label for="firstName">First Name</label></th>
                                <th><label for="middleInitial">M.I.</label></th>
                                <th><label for="lastName">Last Name</label></th>
                                <th><label for="suffix">Acedemic Suffix</label></th>
                            </tr>
                            <tr>
                                <th><input v-model="form.firstName" type="text" name="firstName" required></th>
                                <th><input v-model="form.middleinitial" type="text" name="middleInitial" required></th>
                                <th><input v-model="form.lastName" type="text" name="lastName" required></th>
                                <th><input v-model="form.prefix" type="text" name="suffix"></th>
                            </tr>   
                        </table>
                    </div>
                    <div class="positionFaculty">
                        <table>
                            <tr>
                                <th>
                                    <label for="facultyPosition">Category</label>
                                </th>
                                <th>
                                    <label for="title"  v-if="options.category !== 'noValue'" id="titleLabel">Position</label>
                                </th>
                                <th v-if="showGradeField">
                                    <label for="gradeList" id="gradeLabel">Grade Level</label>
                                </th>
                                <th v-else-if="options.category !== 'noValue' && options.position == 'other'">
                                    <label for="other" id="otherLabel">Others</label>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <select v-model="options.category" id="facultyPosition" @change="resetOptions">
                                      <option value="noValue">...</option>
                                      <option v-for="category in categories"
                                      :value="category" :key="category">
                                        {{ category }}
                                      </option>
                                    </select>
                                </th>
                                <th v-if="showPositionField">
                                    <select v-model="options.position" @change="options.other = ''"
                                    id="facultyPosition">
                                      <option value="noValue">...</option>
                                      <option v-for="position in positions[options.category]" :key="position" value="position">{{ position }}</option>
                                      <option value="other">Other</option>
                                    </select>
                                </th>
                                <th v-if="showOtherField">
                                    <select v-if="showGradeField"
                                    class="other">
                                        <option value="noValue">...</option>
                                        <option v-for="grade in gradeLevels" :key="grade" value="grade"> {{ grade }}</option>
                                    </select>
                                    <div v-else-if="options.position === 'other'" class="other"><input type="text" v-model="options.other"></div>
                                </th>
                            </tr>
                        </table>
                    </div>
                </div>      
            </div>  
        </div>
    </form>
    </client-only>
</template>

<script>
export default {
    props: ['formKey', 'form'],
    data(){
        return { 
          categories: [
            'School Division Officer', 
            'Teaching Staff',
            'Non-Teaching Staff',
            'School Support Staff'
          ],
          positions: {
            'School Division Officer': ['Schools Division Superintendent'],
            'Non-Teaching Staff': ['Principal'],
            'Teaching Staff': ['Master Teacher II', 'Master Teacher I', 'Teacher III', 'Teacher II', 'Teacher I', 'SPED Teacher I'],
            'School Support Staff': ['Utility-SEF', 'Security Guard MOOE', 'UTW-1'],
          },
          gradeLevels: ['Kinder', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'SPED'],
          options: {
            category: "noValue",
            position: "noValue",
            other: "",
          },
          coverPhotoPreview: require("~/assets/images/addFacultyImage.png")
        }
    },
    methods: {
        print(sumthin){
            console.log(sumthin)
        },
        resetOptions(){
            this.options.position = "noValue"
            this.options.other = ""
        },
        deleteForm(){
            this.$emit('deleted', this.formKey)
        },
        handleSubmit(){
            console.log(this.form)
        },
        handleFileUpload(event){
            this.form.coverPhoto = event.target.files[0]
            if (this.form.coverPhoto) {
                this.coverPhotoPreview = URL.createObjectURL(this.form.coverPhoto);
                return
            }
            this.coverPhotoPreview = require("~/assets/images/addFacultyImage.png")
        }
    },
    computed: {
        showPositionField(){
            return this.options.category !== 'noValue'
        },
        showOtherField(){
            return this.showPositionField && 
                   this.options.position !== 'noValue'
        },
        showGradeField(){
            return this.options.category == 'Teaching Staff' && 
                   this.options.position !== 'other' && 
                   this.showOtherField
        },
    }
}
</script>

<style>

</style>