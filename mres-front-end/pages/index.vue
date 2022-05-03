<template>
  <div>
    <img class="sliderImage" src="~/assets/images/schoolSlider.png" alt="">
    <div class="schoolAnnouncements">
      <AnnouncementList />
      <SideBar />
    </div>       
    <section class="activitySection">
        <h4>School Activities</h4>
    </section>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  middleware: ['setAnnouncements'],
}
</script>

<style>
img.sliderImage {
  width: 100%;
  filter: brightness(95%);
  display: block;
}
</style>
