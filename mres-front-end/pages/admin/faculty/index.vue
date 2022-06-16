<template>
  <div class="facultyAdmin box-sized" v-if="dataResolved">
    <div class="facultyHeaderContainer">
        <h3>Organization List</h3>
        <div>
            <nuxt-link to="/admin/faculty/add" id="createNewFaculty"><img src="/add.png">Add New</nuxt-link>
            <nuxt-link to="/admin/faculty/edit"><img src="/editBlue.png">Edit</nuxt-link>
            <div class="searchBar">
                <form>
                    <input type="text" name="search" id="search">
                    <button type="submit"><img src="/searchBtn.png"></button>
                </form>
            </div>
        </div>
    </div>
    <div class="facultyContainer" id="adminDivisionOfficers" v-for="category in categories" :key="category">
        <h4>{{ category }}</h4>
        <div class="facultySubContainer" v-for="pair in categoryPairs[category]" :key="categoryPairs[category].indexOf(pair)">
            <div class="adminFacultyMember" v-for="member in pair" :key="member.id">
                <img :src="`data:image/jpg; base64, ${member.coverPhoto}`" class="adminFacultyImage">
                <div class="adminFacultyInfo">
                    <p class="adminFacultyName"> {{ memberFull(member) }}</p>
                    <p class="adminFacultyPosition"> {{ member.position }} </p>
                </div>
            </div>
        </div>
    </div>
  </div>
  <LoadingDiv v-else />
</template>

<script>
import loading from '~/plugins/loading.js'

export default {
    layout: 'adminView',
    mixins: [loading],
    head(){
        return{
            title: "Faculty[Admin] - Mauaque Resettlement Elementary School"
        }
    },
    async mounted(){
        await this.$store.dispatch('faculty/fetchFaculty')
        this.setDataResolved()
    },
    data(){
        return{
          categories : [
            'School Division Officers',  'Non-Teaching Staff', 
            'Teaching Staff', 'Support Staff'
          ]
        }
    },
    methods:{
      pairify(baseArray){
        const pairs = []
        const lastMember = baseArray[baseArray.length - 1]
        let pair = []
        for (const member of baseArray) {
          pair.push(member)
          if (member === lastMember) {
            pairs.push(pair)
            break
          }
          if (pair.length === 2) {
            pairs.push(pair)
            pair = []
          }
        }
        return pairs
      },
      memberFull(member){
        return `
          ${member.firstName}
          ${member.middleinitial}
          ${member.lastName}
          ${member.prefix}
        `
      }
    },
    computed: {
        members(){
            return this.$store.state.faculty.facultyList
        },
        categoryPairs(){
          return {
            'School Division Officers': this.pairify(this.schoolDivOfficers),
            'Non-Teaching Staff': this.pairify(this.nonTeachingStaff),
            'Teaching Staff': this.pairify(this.gradeTeachers),
            'Support Staff': this.pairify(this.schoolSupport)
          }
        },
        schoolDivOfficers(){
            return this.members.filter(m => m.category === "School Division Officer")
        },
        schoolSupport(){
            return this.members.filter(m => m.category === "School Support Staff")
        },
        nonTeachingStaff(){
            return this.members.filter(m => m.category === "Non-Teaching Staff")
        },
        gradeTeachers(){
            return this.members.filter(m => m.category === "Teaching Staff")
        }
    }
}
</script>

<style>
h4 {
  color: #404040; 
  font-size: 18px;
}

.facultyAdmin {
  width: 100%;
  padding: 3% 4%;
}
.facultyAdmin h3 {
  font-size: 25px;
  color: #404040;
}
.facultyContainer img{
  height: 60px;
  cursor: pointer;
  width: 60px;
  border-radius: 50%;
  object-fit: cover;
}
.facultyHeaderContainer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}
.facultyHeaderContainer div  {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.facultyHeaderContainer div a {
  color: #329bd6;
  font-size: 17px;
  /* My Addition */
  margin-left: 30px;
}
.facultyHeaderContainer div a img {
  width: 18px;
  margin-right: 5px;
  float: left;
  border-radius: 0;
}
.facultyHeader h3 {
  font-size: 30px;
  color: #404040;
  width: 300px;
  text-align: center;
}
.facultyHeader div {
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  margin-left: 28px;
}
.facultyHeader a {
  padding-bottom: 3px;
  padding-left: 10px;
  font-size: 19px;
  color: #329bd6;
}
.facultyHeader a:hover {
  color: #1d6995;
}
.facultyHeader a img {
  width: 17px;
  margin-right: 3px;
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
/* Faculty Container */

.facultyContainer {
  margin: 50px 0;
}
.facultySubContainer{
  display: flex;
  flex-direction: row;
  margin: 15px 0px;
  width: 100%;
  justify-content: space-between;
}
.adminFacultyMember{
  background: #e9e9e9;
  width: 49%;
  border-radius: 7px;
  padding: 10px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.adminFacultyInfo {
  margin-left: 15px;
}
p.adminFacultyPosition {
  color: gray;
  font-size: 13px;
  margin-top: 5px;
}

/* Search */

.searchBar button {
  border: none;
  background: none;
  margin-left: 5px;
  margin-top: 2px;
  float: right;
}
.searchBar {
  border: 1px solid gray;
  border-radius: 3px;
  padding: 2px 5px;
  margin: 0;
  /* My Addition */
  margin-left: 30px;
}
.searchBar input {
  border: none;
  float: left;
  background: none;
  margin-top: 2px;
}
.searchBar button img {
  width:15px; 
  height:auto;
}
input#search {
  font-size: 12px;
  padding: 3px;
}
</style>