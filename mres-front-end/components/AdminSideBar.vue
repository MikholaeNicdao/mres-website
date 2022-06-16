<template>
  <div class="sidebar adminSidebar">
        <ul>
            <li>
                <nuxt-link to="/admin/events"
                    :class="{ currentPage:currentPage.includes('/admin/events') }">
                    Event Schedule
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/admin/faculty"
                    :class="{ currentPage:currentPage.includes('/admin/faculty') }"> 
                    Organization List 
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/admin/announcements"
                    :class="{ currentPage:currentPage.includes('/admin/announcements') }">
                    Announcements
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/admin/activities"
                    :class="{ currentPage:currentPage.includes('/admin/activities') }"> 
                    School Activities
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/admin/continuity_plan"
                    :class="{ currentPage:currentPage.includes('/admin/continuity_plan') }"> 
                    Continuity Plan
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/admin/account"
                    :class="{ currentPage:currentPage.includes('/admin/account') }"> 
                    Account
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/admin"> 
                    Logout
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['currentPage'],
}
</script>

<style>
div.adminSidebar {
    width: 20%;
    background: #e6e6e6;
    padding: 3% 1% 3% 3%;
    overflow-wrap: anywhere;
    width: 250px;
    /* min-width: 135px; */
    min-height: 100vh;
}

div.adminSidebar li {
    list-style:none; 
    padding: 5px;}

div.adminSidebar a {
    color: black;font-size: 15px;}

div.adminSidebar a.currentPage {
    color: #329bd6;
}

div.adminSidebar a:hover {
    color: #329bd6;}
</style>