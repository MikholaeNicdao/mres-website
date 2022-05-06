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
  beforeCreate(){
    this.$store.dispatch('announcement/fetchAnnouncements')
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
