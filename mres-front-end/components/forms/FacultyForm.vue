<template>
    <client-only>
    <form @submit.prevent="handleSubmit">
        <div class="createFacultyContainer">
            <button @click="deleteForm" type="button" class="closeButton">
                <img src="/delete.png">
            </button>
            <div class="facultyDetails">
                <div class="imageFaculty">
                    <label :for="'facultyImage' + formKey"> 
                        <img class="addFacultyImage"
                        :id="'facultyImagePreview'" :src="form.coverPhotoPreview">
                        <button type="button" class="addFacultyImageButton" @click="openFileExplorer">
                            Add Image
                        </button>
                    </label>
                    <!-- <label :for="'facultyImage' + formKey"> 
                        <img class="addFacultyImage" 
                        :id="'facultyImagePreview' + formKey" :src="form.coverPhotoPreview">
                    </label> -->
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
                                    <label for="title"  v-if="form.category !== ''" id="titleLabel">Position</label>
                                </th>
                                <th v-if="showGradeField">
                                    <label for="gradeList" id="gradeLabel">Grade Level</label>
                                </th>
                                <th v-else-if="form.category !== '' && form.position == 'other'">
                                    <label for="other" id="otherLabel">Others</label>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <select v-model="form.category" id="facultyPosition" @change="resetOptions">
                                    <option value="">...</option>
                                    <option v-for="category in categories"
                                    :value="category" :key="category">
                                        {{ category }}
                                    </option>
                                    </select>
                                </th>
                                <th v-if="showPositionField">
                                    <select v-model="form.position" @change="form.other = ''"
                                    id="facultyPosition">
                                    <option value="">...</option>
                                    <option v-for="position in positions[form.category]" :key="position" :value="position">{{ position }}</option>
                                    <option value="other">Other</option>
                                    </select>
                                </th>
                                <th v-if="showOtherField">
                                    <select v-model="form.teacherPerGradeLevel" v-if="showGradeField"
                                    class="other">
                                        <option value="">...</option>
                                        <option v-for="grade in gradeLevels" :key="grade" :value="grade"> {{ grade }}</option>
                                    </select>
                                    <div v-else-if="form.position === 'other'" class="other">
                                        <input type="text" v-model="form.other">
                                    </div>
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
            category: "",
            position: "",
            other: "",
          },
        }
    },
    methods: {
        resetOptions(){
            this.form.position = ""
            this.form.other = ""
        },
        deleteForm(){
            this.$emit('deleted', this.formKey)
        },
        handleFileUpload(event){
            this.form.coverPhoto = event.target.files[0]
            if (this.form.coverPhoto) {
                this.form.coverPhotoPreview = URL.createObjectURL(this.form.coverPhoto);
                return
            }
            this.form.coverPhotoPreview = "/addFacultyImage.png"
            this.getImageAsFile()
        },
        getImageAsFile(){
            fetch("/addFacultyImage.png")
            .then(response => response.blob())
            .then(data => this.form.coverPhoto = data)
        },
        openFileExplorer(){
            document.getElementById('facultyImagePreview').click();
        },
    },
    computed: {
        showPositionField(){
            return this.form.category !== ''
        },
        showOtherField(){
            return this.showPositionField && 
                   this.form.position !== ''
        },
        showGradeField(){
            return this.form.category == 'Teaching Staff' && 
                   this.form.position !== 'other' && 
                   this.showOtherField
        }
    }
}
</script>

<style scoped>
.facultyDetails {
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 25px;}

.inputFaculty {
  width: 80%;
  margin-left: 43px;}

.nameFaculty input[name="suffix"] {width: 250px;}

.other {
  width: 300px;}

.positionFaculty input {
    width: 300px;
    padding: 6px;
    border: none;
    font-size: 15px;
}

.imageFaculty {
  text-align: center;
  margin-left: 20px;
}

.inputFaculty {
  width: 80%;
  margin-left: 43px;}

img.addFacultyImage {
  width: 100px;
  /* My Addition */
  border-radius: 50%;
  object-fit: cover;
  height: 100px;
}
button.addFacultyImageButton{
    background: silver;
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
    color: #404040;
    margin-top: 7px;
    width: 100%;
}

button.addFacultyImageButton:hover{
    background: gray;
    color: white;
}

.nameFaculty table, .positionFaculty table {
  margin-top: 5px;}

.nameFaculty input[name=firstName],
.nameFaculty input[name=lastName] {
  width: 250px;}

.nameFaculty input[type="text"],
.positionFaculty select {
  padding: 6px;
  border: none;
  font-size: 15px;}

.nameFaculty input[name="middleInitial"] {
  width: 100px;}

.nameFaculty th,
.positionFaculty th {
    padding: 0px 3px;}

select#facultyPosition, 
.title, 
.other {
  width: 279px;}

.createFacultyContainer {
  width: 100%;
  display: flex; 
  background: #e6e6e6;
  border-radius: 10px;
  margin: 32px auto;
  flex-direction: row-reverse;
  overflow: auto;
  text-align: left;}

button.closeButton {
  height: 34px;
  border: none;
  background: no-repeat;
  margin: 20px;}

button.closeButton img {
  width: 30px;}
</style>