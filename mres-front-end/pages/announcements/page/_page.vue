<template>
  <section v-if="dataResolved">
    <div class="announcementPage">
        <h3>Announcements</h3>
        <div class="articleList">
          <PostCard 
            v-for="announcement in pageAnnouncements" 
            :key="announcement.id" 
            :type="'announcement'"
            :post="announcement">
          </PostCard>
        </div>
        <!-- Filler Div if announcements are not enough for the page -->
        <div style="height:460px"
          v-if="pageAnnouncements.length <= 4">
        </div>
        <!-- FDiv end -->
        <div class="pageBtn">
            <nuxt-link
              :class="{ disabled: isFirstPage }" 
              :to="`/announcements/page/${+this.$route.params.page-1}`"> 
              &#60;&#60;  Previous
            </nuxt-link>
            <p> Page {{ this.$route.params.page }} of {{ pageCount }} </p>
            <nuxt-link
              :class="{ disabled:isLastPage }"
              :to="`/announcements/page/${+this.$route.params.page+1}`"> 
              Next  &#62;&#62;
            </nuxt-link>
        </div>
    </div>
  </section>
  <LoadingDiv v-else />
</template>

<script>
import loading from '~/plugins/loading.js'

export default {
  name: 'AnnouncementsPage',
  mixins: [loading],
  head(){
    return{
      title: "Announcements - Mauaque Resettlement Elementary School"
    }
  },
  async mounted(){
    this.$store.dispatch('announcement/fetchPageAnnouncements', this.$route.params.page)
    this.setDataResolved()
  },
  computed: {
    isLastPage(){
      return this.$route.params.page >= this.$store.state.announcement.pageCount
    },
    isFirstPage(){
      return this.$route.params.page <= 1
    },
    pageAnnouncements(){
      return this.$store.state.announcement.pageAnnouncements
    },
    pageCount(){
      return this.$store.state.announcement.pageCount
    },
  }
}
</script>

<style>
.announcementPage {
  padding: 3% 4%;
  width: 100%;
  display: block;
}

.announcementPage h3 {
  color: #404040;
  font-size: 22px;
  text-align: center;
}

.articleList {
  display: inline-block;
  width: 100%;
}

.pageBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;}

.pageBtn a {
  padding: 7px;
  border: 1px solid #329bd6;
  background: #329bd6;
  color: white;
  font-size: 14px;
  font-weight: 600;
  border-radius: 5px;
  width: 97px;
  margin: 0 10px;}

.pageBtn a:hover {
  background: #2278aa;}

a.disabled{
  pointer-events:none;
  color:#AAA;
  background:#F5F5F5;
  border-color: #AAA;
}
</style>
