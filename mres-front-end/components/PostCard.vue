<template>
  <div class="listContainer">
    <div class="listDetail">
      <img :src="'data:image/jpg; base64, ' + post.coverPhoto"> 
      <div class="listContent">
        <div>
            <h4>{{ post.title }}</h4>
            <p> Posted {{ post.formattedCreatedAt }}</p>
        </div>
        <div>
            <nuxt-link :to="this.linkToPost">Read more</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PostCard',
  props: { 'post': Object, 'type':String },
  data(){
      return{
          linkToPost: this.type==='announcement' 
            ? `/announcements/${this.post.id}` 
            : `/activities/${this.post.id}` 
      }
  }
}
</script>
