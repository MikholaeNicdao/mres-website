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
          <li><a href="#">Enrollment</a></li>
          <li><a href="#">Services<img class="dropDownBtn" src="~assets/images/dropDownBtn.png"></a>
              <div class="servicesMenu">
                  <ul>
                      <li><a href="#">Request Education Data</a></li>
                      <li><a href="#">Job Application</a></li>
                      <li><a href="#">Applicaton to Travel Abroad</a></li>
                      <li><a href="#">Application for Leave</a></li>
                  </ul>
              </div>
          </li>
          <li><a href="#">About<img class="dropDownBtn" src="~assets/images/dropDownBtn.png"></a>
              <div class="aboutMenu">
                  <ul>
                      <li><nuxt-link to="/about/vision_mission">Vision &#38; Mission</nuxt-link></li>
                      <li><nuxt-link to="/about/history">History</nuxt-link></li>
                      <li><nuxt-link to="/faculty">Faculty</nuxt-link></li>
                      <li><a href="#">Continuity Plan</a></li>
                  </ul>
              </div>
          </li>
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
  padding: 10px 3%;
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
  margin-left: 20px;
}
.links li .servicesMenu{
  display: none;
}

.aboutMenu, .servicesMenu {
  display: none;
  right: 100%;
  background: #cbcbcb;
}

.branding {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.branding h5 {
  font-size: 0.5em;
  color: #404040;
}
img.logo {
  width: 90px;
}
.sname {
  font-size: 1.6em;
  padding-left: 15px;
  min-width: 400px;
}
.sname h3 {
  color:#404040;
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
    background: #d9d9d9;
    top:100%;
    position:absolute;
    right: 46px;
    min-width: 300px;
  }
  nav .links{
    flex-direction: column;
    align-items: flex-start;
    padding:10px 0;
  }
  nav .links li{
    padding-right:0;
    width: 300px;
    position: relative;
    margin-left: 0;
  }      
  nav .links li a{
    padding:10px 20px;
    /* width:250px; */
  }
  nav .links li:hover{
    background:#f2f2f2;
  }

  .burger{
    display:block;
  }

  .aboutMenu, .servicesMenu {
    background-color: #d9d9d9;
  }
  .links li:hover .aboutMenu, .links li:hover .servicesMenu {
      display: block;
      position: absolute;
      top:-10px;
      padding: 10px 0;
  }
}
@media (min-width: 1161px){
  .links li:hover .aboutMenu, .links li:hover .servicesMenu {
      display: block;
      position: absolute;
      right: 55px;
      background-color: #e6e6e6;
      width: 330px;
      padding: 20px 0;
      margin: 0;
  }
  
  .aboutMenu li,.servicesMenu li {
      padding: 5px 20px;
      margin-left: 0 !important;
  }
    
  .aboutMenu li:hover, .servicesMenu li:hover {
      background-color: #cccccc;
  }

  .aboutMenu a:hover, .servicesMenu a:hover {
      color: #404040; 
  }

  .links a:hover {
    color: #329bd6; 
  }
}
</style>