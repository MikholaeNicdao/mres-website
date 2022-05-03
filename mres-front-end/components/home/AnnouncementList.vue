<template>
    <section class="announcementSection">
        <div class="annoucements">
            <h4>Annoucements</h4>
            <div class="announcement" v-for="announcement in topAnnouncements" :key="announcement.id">
                <img :src="`data:image/jpg; base64, ${announcement.coverPhoto}`">
                <div class="announcementContainer">
                    <div>
                        <h5> {{ announcement.title }}</h5>
                        <!-- <p>{{ announcement.date }}</p> -->
                        <p class="announcementSnippet"> {{ announcement.description }} </p>
                    </div>
                    <nuxt-link :to="'/announcements/' + announcement.id">Read more</nuxt-link>
                </div>
            </div>
            <nuxt-link to="/announcements" class="viewAnnouncements">View All Announcements</nuxt-link>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'AnnouncementPage',
    middleware: ['setAnnouncements'],
    computed: {
        announcements () {
            return this.$store.state.announcement.announcements
        },
        ...mapGetters({
          topAnnouncements: "announcement/getTopAnnouncements",
        })
    }
}
</script>

<style>
.annoucements { 
  padding-left: 5%;
  display: block;
  background-color: #f2f2f2;
  padding-top: 3%;
  padding-right: 5%;
  text-align: center;
  min-height: 100vh;
}
.annoucements h4 {
  text-align: center; 
  font-size: 40px;
  color: #404040;
  padding-bottom: 20px;
}
.announcement img {
  height: 190px;
  width: 18em;
  object-fit: cover;
}
.announcement {
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid silver;
  text-align: left;
}
.announcementContainer {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: flex-start;
}
.announcement h5 {
  font-size: 32px; 
  color:#329bd6; 
  font-weight:bold;
}

.announcement p {
  font-size:20px; 
  color:gray; 
  margin-top:10px;
}

.announcement a {
  font-size:20px; 
  font-weight:bold;
  color:#CDC960;
}
.announcementSection {
  display: inline-block;
  width: 65%;
}
a.viewAnnouncements {
  display: inline-block;
  font-size: 27px;
  font-weight: bold;
  margin-top: 50px;
  padding: 10px 40px;
  border-radius: 10px;
  background-color: #329bd6;
  color: white;
}
a.viewAnnouncements:hover {
  background-color: #2278aa;
}
a.viewCalendar {
  font-size: 22px;
  padding-left: 30px;
  position: absolute;
  bottom: 44px;
  color: #404040;
}
.viewItem {
  background-color: #329bd6;
  height: 10px;
  width: 158px;
  position: absolute;
  bottom: 30px;
  margin-left: 24px;
}
.schoolAnnouncements {
  display: flex;
}
.announcementSnippet{
  text-overflow: ellipsis;
}
</style>