<template> 
    <section>
        <div class="faculty">
            <h3>School Organization</h3>   

            <div class="facultyContainer divisionOfficers">
                <h4>School Division Officers</h4>
                <div class="headMember">
                    <!-- <FacultyCard :member="member" /> -->
                </div>
                <div class="member">
                    <FacultyCard v-for="member in schoolDivOfficers" :key="member.id" :member="member" />
                </div>
            </div>

            <div class="facultyContainer schoolAdministration">
                <h4>Non-Teaching Staff</h4>
                <div class="headMember">
                </div>
                <div class="member">
                    <FacultyCard v-for="member in nonTeachingStaff" :key="member.id" :member="member" />
                </div>
            </div>

            <div class="facultyContainer teachingForce">
                <h4>Teaching Forces</h4>
                <div v-for="gradeLevel in gradeLevels" :key="gradeLevel">
                    <h5>{{ gradeLevel }}</h5>
                    <div class="member">
                        <FacultyCard v-for="member in gradeTeachers[gradeLevel]" :key="member.id" :member="member" />
                    </div>
                </div>
            </div>

            <div class="facultyContainer divisionOfficers">
                <h4>School Support Staff</h4>
                <div class="headMember">
                    <!-- <FacultyCard :member="member" /> -->
                </div>
                <div class="member">
                    <FacultyCard v-for="member in schoolSupport" :key="member.id" :member="member" />
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    layout: 'about',
    head(){
        return{
            title: "School Staff - Mauaque Resettlement Elementary School"
        }
    },
    async mounted(){
        await this.$store.dispatch('faculty/fetchFaculty')
    },
    data(){
        return{
            gradeLevels : [
                'Kinder',  'Grade 1', 
                'Grade 2', 'Grade 3', 
                'Grade 4', 'Grade 5', 
                'Grade 6', 'SPED'
            ]
        }
    },
    computed: {
        members(){
            return this.$store.state.faculty.facultyList
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
            return { 
                'Kinder' : this.members.filter(m => m.teacherPerGradeLevel === "Kinder"),
                'Grade 1' : this.members.filter(m => m.teacherPerGradeLevel === "Grade 1"),
                'Grade 2' : this.members.filter(m => m.teacherPerGradeLevel === "Grade 2"),
                'Grade 3' : this.members.filter(m => m.teacherPerGradeLevel === "Grade 3"),
                'Grade 4' : this.members.filter(m => m.teacherPerGradeLevel === "Grade 4"),
                'Grade 5' : this.members.filter(m => m.teacherPerGradeLevel === "Grade 5"),
                'Grade 6' : this.members.filter(m => m.teacherPerGradeLevel === "Grade 6"),
                'SPED' : this.members.filter(m => m.teacherPerGradeLevel === "SPED")
            }
        }
    }
}
</script>
<style>
.faculty {
    padding: 50px 63px;
}
.faculty h3 {
    color: #404040;
    font-size: 30px;
    width: 100%; 
    text-align: center; 
}
.faculty h4 {
    text-align: center;
    padding-bottom: 15px;
    font-size: 22px;
    color: #404040;
}
.faculty h5 {
    text-align: center;
    padding: 20px 0;
    color: #404040;
    font-size: 18px;
}
.headMember {
    padding: 10px 0;
    width: 300px;
    text-align: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.facultyInfo {
    border: 1px solid silver;
    width: 290px;
    padding: 25px;
    border-radius: 20px;
    padding-top: 43px;
    position: relative;
    z-index: -1;
    text-align: center;
    font-size: 14px;
}
.facultyRow {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.facultyColumn {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
}
.member  {
    padding: 10px 0; 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.facultyChart, 
.nonTeachingChart,
.headFacultyChart {
    margin: 90px 0;
}
.facultyContainer {
    margin: 50px 0;
}
.adminFacultyMember {
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
</style>