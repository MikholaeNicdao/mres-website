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
                        <p> {{ announcementDate(announcement.createdAt) }} </p>
                    </div>
                    <nuxt-link :to="'/announcements/' + announcement.id">Read more</nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'AnnouncementPage',
    methods: {
      announcementDate(aDate){
        const date = new Date(aDate)
        const formattedDate = `${date.toLocaleString('default', { month: 'long' })} ${date.getDay()}, ${date.getFullYear()}`
        return formattedDate
      },
    },
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
  display: block;
  background-color: #f2f2f2;
  padding-top: 3%;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 5%;
}
.annoucements h4, .events h4, .activitySection h4 {
  color: #404040;
  font-size: 18px;
  padding-bottom: 25px;
}
.announcement img {
  height: auto;
  width: 116px;
  object-fit: cover;
}
.announcement {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid silver;
  text-align: left;
}
.announcementContainer {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: flex-start;
}
.announcement h5 {
  font-size: 22px; 
  color:#329bd6; 
  font-weight:normal;
}

.announcement p {
  font-size:14px; 
  color:gray; 
}

.announcement a {
  font-size: 14px; 
  font-weight: normal;
  color:#CDC960;
  margin-top: 20px;
}
.announcementSection {
  display: inline-block;
  width: 65%;
}
.announcement a:hover {
    color: #aeaa37;
}
.viewCalendar {
  margin-top: 40px;
}

</style>