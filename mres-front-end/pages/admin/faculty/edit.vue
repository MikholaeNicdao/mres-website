<template>
    <div style="width:100%;display:flex">
        <!-- <AdminSideBar :currentPage="currentPage" /> -->
        <div class="facultyScrolldown">
            <h3 style="font-size: 25px; font-weight: normal; color: #329bd6;">Organization List</h3>
            <div class="searchBar">
                <form>
                    <input type="text" name="search" id="search"
                        v-model="search">
                    <button type="submit"><img src="/searchBtn.png"></button>
                </form>
            </div>
            <div class="memberContainer">
                <div class="selectFacultyMember" :class="{ selected:selectedMember === member.id}"
                v-for="member in members" :key="member.id"
                @click="editMember(member)">
                    <img :src="`data:image/jpg; base64, ${member.coverPhoto}`" class="adminFacultyImage">
                    <div class="adminFacultyInfo">
                        <p class="adminFacultyName"> {{ memberFullName(member) }} </p>
                        <p class="adminFacultyPosition">{{ member.position }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="editFaculty">   
            <div class="createFaculty">
                <client-only>
                <form @submit.prevent="updateFaculty(form)" method="post">
                    <div class="createFacultyHeader">
                        <div class="editFacultyButtons">
                            <button id="saveFacultyBtn">Update</button>
                        </div>
                    </div>
                    <div class="createFacultyContainer">
                        <div class="facultyDetails">
                            <div class="imageFaculty">
                                <label :for="'facultyImage'"> 
                                    <img class="addFacultyImage"
                                    :id="'facultyImagePreview'" :src="form.coverPhotoPreview">
                                    <button type="button" @click="openFileExplorer">
                                        Add Image
                                    </button>
                                </label>
                                <input @change="handleFileUpload" 
                                type="file" class="addFacultyField"
                                :id="'facultyImage'">
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
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'adminView',
    async mounted(){
        await this.$store.dispatch('faculty/fetchFaculty')
    },
    data(){
        return {
          form: {
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
          },
          selectedMember : null,
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
          search: "",
          currentPage: this.$router.currentRoute.path
        }
    },
    methods: {
        formatForm(form){
            if (form.teacherPerGradeLevel === '') {
                form.teacherPerGradeLevel === null
            }
            if (form.position === 'other'){
                form.position = form.other
            }
        },
        async updateFaculty(form) {
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
            await this.$store.dispatch('faculty/updateFaculty', { id:form.id, formData})
            this.selectedMember = null
            this.resetForm();
        },
        memberFullName(member){
            return `
            ${member.firstName}
            ${member.middleinitial}
            ${member.lastName}
            ${member.prefix}
            `
        },
        editMember(member){
            this.selectedMember = member.id
            this.form = { ...member }
            if(this.isOtherPosition(member.position)){
                this.form['position'] = 'other'
                this.form['other'] = member.position
            }

            this.form.coverPhotoPreview = "data:image/jpg; base64, " + this.form.coverPhoto
        },
        isOtherPosition(position){
            return !this.positions[this.form.category].includes(position)
        },
        openFileExplorer(){
            document.getElementById('facultyImagePreview').click();
        },
        resetForm(){
            this.form = {
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
            }
        },
        resetOptions(){
            this.form.position = ""
            this.form.other = ""
        },
        handleFileUpload(event){
            this.form.coverPhoto = event.target.files[0]
            if (this.form.coverPhoto) {
                this.form.coverPhotoPreview = URL.createObjectURL(this.form.coverPhoto);
                this.$forceUpdate()
                return
            }
            this.form.coverPhotoPreview = "/addFacultyImage.png"
            this.getImageAsFile()
            this.$forceUpdate()
        },
        getImageAsFile(){
            fetch("/addFacultyImage.png")
            .then(response => response.blob())
            .then(data => this.form.coverPhoto = data)
        },
        containsSearchString(){

        }
    },
    computed: {
        members(){
            if(this.search.trim()==="") 
                return this.$store.state.faculty.facultyList
                
            return this.$store.state.faculty.facultyList.filter(member =>
                this.memberFullName(member).includes(this.search))
        },
        photoPreview(){
            return this.form.coverPhotoPreview
        },
        showPositionField(){
            return this.form.category !== ''
        },
        showOtherField(){
            return this.showPositionField && 
                   this.form.position !== ''
        },
        showGradeField(){
            return this.form.category === 'Teaching Staff' && 
                   this.form.position !== 'other' && 
                   this.showOtherField
        }
    },
}
</script>

<style scoped>
.facultyScrolldown {
    width: 30%; 
    margin: 3% 0 3% 1%; 
    border-right: 1px solid #e9e9e9; 
    padding-right: 1.5%;
    /* max-height: 85vh; */
    /* My Additions */
    height: 95vh;
    overflow-y: scroll;
}
.searchBar {
    margin:0; 
    margin-top: 5px; 
    display: flex; 
    margin-bottom: 40px;
}
.searchBar form {
    width: 100%;
}
.searchBar input {
    width: 90%;
}
.searchBar button img {
    width:15px; 
    height:auto;
}
.selectFacultyMember {
    background: #e9e9e9;
    width: 49%;
    border-radius: 7px;
    padding: 10px 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
#facultyImagePreview {
    height: 80px;
    cursor: pointer;
    /* My Additions */
    width: 80px;
    border-radius: 50%;
    object-fit: cover;
}
.selectFacultyMember {
    width: 100%; 
    margin: 10px 0;
}
.selectFacultyMember:hover {
    background: #CCCCCC;
}
.selectFacultyMember img {
    width: 60px;
    border-radius: 80px;
    /* My Additions */
    object-fit: cover;
    height: 60px;
}
.selected{
    background: #CCCCCC;
}

section.admin{
    display: flex;
}

.adminFacultyInfo {
    margin-left: 15px;
}
p.adminFacultyPosition {
    color: gray;
    font-size: 13px;
    margin-top: 5px;
}
#createNewFaculty {
    font-size: 17px;
    background: none;
    border: none;
    color: #329bd6;
}
#createNewFaculty img {
    width: 18px;
    margin-right: 5px;
    float: left;
}
button#saveFacultyBtn {
    background: #329bd6;
    border: none;
    color: white;
    font-size: 20px;
    padding: 7px;
    border-radius: 8px;
    width: 110px;
    margin-left: 40px;
}
button#saveFacultyBtn:hover {
    background: #1d6995;
}
#createNewFaculty:hover {
    color: #1d6995;
}
.editFaculty {
    width: 70%; 
    padding: 3% 4% 3% 1.5%;
}
.editFacultyButtons {
    display: flex; 
    justify-content: flex-end;
}
.createFacultyContainer {
    background: #e9e9e9;
    border-radius: 10px;
    padding: 20px;
    margin: 30px 0;
    overflow-x: scroll;
}
.createFacultyContainer button {
    float: right;
    border: none;
    background: none;
}
.createFacultyContainer button img {
    width: 25px;
}
input.addFacultyImage {
    height: 80px;
}
.imageFaculty {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
}
.imageFaculty button {
    background: silver;
    padding: 5px;
    border-radius: 5px;
    color: #404040;
    margin-top: 7px;
    width: 100%;
}
.imageFaculty button:hover {
    background: gray;
    color: white;
}
.inputFaculty th label {
    font-weight: 600;
    color: #404040;
    padding-left: 5px;
    width: 100px;
}
.facultyDetails {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
}
.inputFaculty input,.inputFaculty select {
    padding: 3px;
}
.inputFaculty th {
    padding-right: 10px;
}
.inputFaculty {
    margin-left: 15px;
    width: 100%;
    text-align: left;
    font-size: 14px;
}
.inputFaculty input[name="middleInitial"] {
    width: 60px;
}
.nameFaculty input {
    width: 193px;
}

.label {
    display: none;
}
.positionFaculty {
    margin-top: 7px;
    overflow: hidden;
}
.otherTable {
    display: flex;
}
#otherTeachingTitle {
    margin-right: 10px;
}
.positionFaculty select,
.positionFaculty input {
    width: 160px;
}
th#otherTh {
    display: flex;
}
th#otherTh #otherLabel {
    width: 170px;
}
</style>