<template>
  <form @submit.prevent="onSubmit">
      <label for="username">Username:</label>
      <input type="text" 
      name="username" 
      id="username" 
      v-model="username">

      <label for="password">Password:</label>
      <input type="password" 
      name="password" 
      id="password"
      v-model="password">

      <input type="submit" value="Submit">
  </form>
</template>

<script>

export default {
    data(){
        let username = ""
        let password = ""
        return { username, password }
    },
    mounted(){
        if(this.adminLogged) this.$router.push("/")
    },
    methods: {
        onSubmit(){
            this.login()
        },
        login () {
            this.$store.commit('login/setLoggedUser', { 
                username:this.username, 
                password:this.password 
            })
            if(this.adminLogged) this.$router.push('/')
        }
    },
    computed: {
        adminLogged(){
            return this.$store.state.login.adminLogged
        }
    }
}
</script>

<style>

</style>