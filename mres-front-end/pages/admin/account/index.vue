<template>
<div class="adminAccount">
    <h3>Account</h3>
    <div class="adminList">
        <h5>Admin List</h5>
        <table>
            <tr class="tableHeader">
                <th>Name</th>
                <th>Email</th>
            </tr>
            <tr>
                <th>Ghyllan Lyzzl B. Deñola</th>
                <th>sample@email.com</th>
            </tr>
            <tr>
                <th>Kyle Mendiola</th>
                <th>sample2@email.com</th>
            </tr>
        </table>
    </div>
    <div class="changePass">
        <h5>Change Password</h5>
        <div class="passInput">
            <form @submit.prevent="">
                <table>
                    <tr>
                        <th><label for="email">User</label></th>
                        <th><input type="email" name="email" id="email" disabled></th>
                    </tr>
                    <tr>
                        <th><label for="changePass">Current Password</label></th>
                        <th><input type="password" name="password" id="password"></th>
                    </tr>
                    <tr>
                        <th><label for="newPass">New Password</label></th>
                        <th><input type="password" name="newPass" id="newPass"></th>
                    </tr>
                    <tr>
                        <th><label for="confirmPass">Confirm Password</label></th>
                        <th><input type="password" name="confirmPass" id="confirmPass"></th>
                    </tr>
                </table>
                <button type="submit">Change Password</button>
            </form>
        </div>
    </div>
</div>  
</template>

<script>
export default {
    layout: 'adminView'
}
</script>

<style>
.adminAccount {
    width: 80%;
    padding: 3% 4%;
}

.adminAccount h3{
    font-size: 25px;
    color: #404040;
}

.adminList {
    margin-top: 40px;
    margin-bottom: 50px;
}

.adminList h5 {
    font-size: 18px;
    color: #404040;
}

.adminList table {
    width: 100%;
    margin-top: 10px;
    text-align: left;
}

.adminList table,
.adminList th,
.adminList tr {
    border: 1px solid silver;
    border-collapse: collapse;
    padding: 5px 10px;
    font-size: 14px;
    font-weight: normal;
}

.adminList .tableHeader th {
    font-weight: bold;
    font-size: 16px;
    text-align: center;
}

.changePass h5 {
    font-size: 20px;
    font-weight: normal;
    color: #329bd6;
}

.passInput {
    margin: 10px 0 50px;
}

.passInput table {
    text-align: left;
}

.passInput label {
    font-size: 14px;
    font-weight: normal;
    margin-right: 28px;
}

.passInput th {
    padding-bottom:10px;
}

.changePass input {
    padding: 3px;
    width: 200px;
    font-size: 14px;
}

.changePass button {
    margin-top:10px;
    padding: 3px;
}      
</style>