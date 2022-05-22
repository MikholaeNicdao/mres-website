<template>
    <div class="body">
        <NavBar />
        <section class="admin">
            <div class="sidebar adminSidebar">
                <ul>
                    <li><a href="#">Event Schedule</a></li>
                    <li><nuxt-link to="/admin/faculty"> Organization List </nuxt-link></li>
                    <li><nuxt-link to="/admin/announcements">Announcements</nuxt-link></li>
                    <li><nuxt-link to="/admin/activities"> School Activities</nuxt-link></li>
                    <li><a href="#">Account</a></li>
                </ul>
            </div>
            <Nuxt />
        </section>
        <Footer />
    </div>
</template>

<style>
section.admin {
    display: flex;}

div.adminSidebar {
    width: 20%;
    background: #e6e6e6;
    padding: 3% 1% 3% 3%;
    overflow-wrap: anywhere;
    min-width: 135px;}

div.adminSidebar li {
    list-style:none; 
    padding: 5px;}

div.adminSidebar a {
    color: black;font-size: 15px;}

div.adminSidebar a:hover {
    color: #329bd6;}
</style>