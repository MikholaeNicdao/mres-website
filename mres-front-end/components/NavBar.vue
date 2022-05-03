<template>
  <header>
    <nuxt-link to="/">
      <div class="branding">
        <img class="logo" src="~/assets/images/mauaqueLogo.png">
        <div class="sname">
          <h3>MRES</h3>
          <h5>Mauaque Resettlement Elementary School</h5>
        </div>
      </div>
    </nuxt-link>
    <div class="navigation">
      <nav>
        <ul class="links">
          <li><nuxt-link to="/activities">Activities</nuxt-link></li>
          <li><nuxt-link to="/announcements">Announcements</nuxt-link></li>
          <li><nuxt-link to="/faculty">Faculty</nuxt-link></li>
          <li><a href="#">About <img class="dropDownBtn" src="~/assets/images/dropDownBtn.png"></a></li>
        </ul>
      </nav>
    </div>
    <div class="burger">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </header>
</template>
<script>

export default {
  computed: {
    adminLogged(){
        return this.$store.state.login.adminLogged
    }
  },
  methods: {
    logout () {
      alert("Logged Out")
        this.$store.commit("login/logout")
    }
  }
}
</script>
<style>
header{
  width: 100%;
  padding: 20px 3%;
  background: #fff;
  border-bottom: solid 10px #329bd6;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}
.navigation{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
nav .links {
  float: right;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
nav .links a {
  display: block;
  font-size: 18px;
  text-decoration: none;
  font-family: sans-serif;
  color: #454545;
}
nav .links li {
  list-style: none;
  padding-left: 40px;
}
.branding {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
img.logo {
  width: 90px;
}
.sname {
  font-size: 1.6em;
  padding-left: 15px;
  min-width: 400px;
}
.branding h5 {
  font-size: 0.5em;
  color: #404040;
}
.burger{
  width: 90px;
  height: 50px;
  padding:10px;
  float:right;
  display: none;
}
.burger div{
  background:#000;
  height:3px;
  margin:4px 0;
}

@media (max-width:1160px){
  header{
    position:relative;
  }
  nav{
    justify-content: flex-end;
    background:#777;
    top:100%;
    position:absolute;
    right: 46px;min-width: 250px;
  }
  nav .links{
    flex-direction: column;
    align-items: flex-start;
    padding:15px 0;
  }
  nav .links li{
    padding-right:0;
  }      
  nav .links li a{
    padding:10px 20px;
    width:250px;
  }
  nav .links li a:hover{
    background:#000;
    color:#fff !important;
    }
  .burger{
    display:block;
  }
}
</style>