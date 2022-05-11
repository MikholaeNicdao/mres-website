<template>
  <div>
    <img class="sliderImage" src="~/assets/images/schoolSlider.png" alt="">
    <div class="schoolAnnouncements">
      <TopAnnouncements />
      <SideBar />
    </div>       
    <ActivityList />
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  async beforeCreate(){
    await this.$store.dispatch('announcement/fetchAnnouncements')
    this.$store.dispatch('announcement/fetchRecentAnnouncements', { count:3 })
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
