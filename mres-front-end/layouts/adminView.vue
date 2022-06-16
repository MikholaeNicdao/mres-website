<template>
    <div class="body">
        <div class="adminHeader">
            <div class="branding">
                <nuxt-link to="/admin" class="branding">
                    <img class="adminLogo" src="~/assets/images/mauaqueLogo.png">
                    <div class="adminName">
                        <h5>Mauaque Resettlement Elementary School</h5>
                    </div>
                </nuxt-link>
            </div>
        </div>
        <section class="admin">
            <AdminSideBar :currentPage="currentPage" />
            <Nuxt />
        </section>
    </div>
</template>

<script>
export default {
    data(){
        return{
            currentPage: this.$router.currentRoute.path
        }
    },
    watch:{
        $route(to){
            this.currentPage = to.path
        }
    } 
}
</script>

<style scoped>
section.admin {
    display: flex;
    width: 100%;
}
.adminHeader {
    background: #329bd6;
    padding: 10px 3%;
    width: 100%;
}
.adminLogo {
    width: 28px;
}
.adminName h5 {
    color: white;
    font-size: 14px;
    padding-left: 6px;
}
.flex{
    display: flex;
}
</style>