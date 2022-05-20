<template>
  <div class="listContainer">
      <img :src="'data:image/jpg; base64, ' + announcement.coverPhoto"> 
      <div class="listContent">
          <div>
              <h4>{{ announcement.title }}</h4>
              <p> Posted {{ announcement.createdAt }}</p>
          </div>
          <div>
              <nuxt-link :to="'/announcements/' + announcement.id ">Read more</nuxt-link>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'AnnouncementCard',
  props: { 'announcement': Object },
}
</script>

<style>

</style>
