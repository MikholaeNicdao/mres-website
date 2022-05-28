<template>
    <tr v-if="!editMode">
        <th><img class="facultyImgPreview" :src="`data:image/jpg; base64, ${faculty.coverPhoto}`"></th>
        <th>{{ faculty.firstName }}</th>
        <th>{{ faculty.middleinitial }}</th>
        <th>{{ faculty.lastName }}</th>
        <th>{{ faculty.prefix }}</th>
        <th>{{ faculty.position }}</th>
        <th><button type="button" class="facultyBtn" id="editFaculty">Edit</button></th>
        <th><button type="button" class="facultyBtn" id="deleteFaculty">Delete</button></th>
    </tr>
    <tr v-else>
        <th><img :src="`data:image/jpg; base64, ${faculty.coverPhoto}`"></th>
        <th><input type="text" v-model="form.firstName"></th>
        <th><input type="text" v-model="form.middleinitial"></th>
        <th><input type="text" v-model="form.lastName"></th>
        <th><input type="text" v-model="form.prefix"></th>
        <th>School Division Superintendent</th>
        <th><button type="button" class="facultyBtn" id="editFaculty">Edit</button></th>
        <th><button type="button" class="facultyBtn" id="deleteFaculty">Delete</button></th>
    </tr>
</template>

<script>
export default {
    props: ['faculty'],
    data(){
        return {
            editMode: false,
            form: {
                id: this.faculty.id,
                firstName: this.faculty.firstName,
                middleinitial: this.faculty.middleinitial,
                lastName: this.faculty.lastName,
                prefix: this.faculty.prefix,
                position: this.faculty.position,
                teacherPerGradeLevel: 1,
                coverPhoto: this.faculty.coverPhoto,
            }
        }
    }
}
</script>

<style>
</style>