<template>
    <div class="facultyMember">
        <div class="facultyImage"><img :src="`data:image/jpg; base64, ${member.coverPhoto}`"></div>
        <div class="facultyInfo">
            <p class="facultyName"> {{ fullName }} </p>
            <p class="facultyPosition"> {{ member.position }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: ['member'],
    computed: {
        fullName(){
            return `
            ${this.member.firstName} 
            ${this.member.middleinitial} 
            ${this.member.lastName}
            ${this.member.prefix}
            `
        }
    }
}
</script>
<style>
.facultyMember {
    margin-top: 15px;
}
.facultyImage {
    height: 66px;
    text-align: center;
}
.facultyImage img {
    border-radius: 50%;
    width: 95px;
    border: 1px solid silver;
    /* My Additions */
    object-fit: cover;
    height: 95px;
}
</style>