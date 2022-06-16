<template>
  <div v-if="dataResolved">
    <img class="sliderImage" src="~/assets/images/schoolSlider.png" alt="">
    <div class="schoolAnnouncements">
      <TopAnnouncements />
      <EventSideBar />
    </div>       
    <ActivityList />
  </div>
  <LoadingDiv v-else />
</template>

<script>
import loading from '~/plugins/loading.js'

export default {
  name: 'HomePage',
  mixins: [loading],
  head(){
    return{
      title: "Home - Mauaque Resettlement Elementary School"
    }
  },
  async mounted(){
    await this.$store.dispatch('announcement/fetchAnnouncements')
    await this.$store.dispatch('announcement/fetchRecentAnnouncements', { count:3 })
    await this.$store.dispatch('activity/fetchActivities')
    await this.$store.dispatch('activity/fetchRecentActivities', { count:4 })
    await this.$store.dispatch('event/fetchEvents')
    await this.$store.dispatch('event/fetchRecentEvents', { count:3 })
    this.setDataResolved()
  }
}
</script>

<style>
img.sliderImage {
  width: 100%;
  display: block;
}

.schoolAnnouncements {
  display: flex;
}

</style>
