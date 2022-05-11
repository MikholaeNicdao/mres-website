<template>
  <div class="listContainer">
      <img :src="'data:image/jpg; base64, ' + this.activity.coverPhoto"> 
      <div class="listContent">
          <div>
              <h4>{{ activity.title }}</h4>
              <p> Posted {{ activity.createdAt }}</p>
          </div>
          <div>
              <nuxt-link :to="'/activities/' + activity.id ">Read more</nuxt-link>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'ActivityCard',
  props: { 'activity': Object },
}
</script>

<style>

</style>
