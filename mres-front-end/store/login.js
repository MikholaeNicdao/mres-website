export const state = () => ({
    admins:
    {
        "userA": { password:"a" },
        "userB": { password:"b" }
    },
    adminLogged: ""
})
  
export const mutations = {
    setLoggedUser(state, creds){
        if(!state.admins.hasOwnProperty(creds.username)){
            alert("Wrong Creds")
            return
        }
        if(state.admins[creds.username].password !== creds.password){
            alert("Wrong Password")
            return
        }
        state.adminLogged = creds.username
    },
    logout(state){
        state.adminLogged = ""
    }
}