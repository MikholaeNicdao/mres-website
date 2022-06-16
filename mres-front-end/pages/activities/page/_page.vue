<template>
  <section>
    <div class="announcementPage" v-if="dataResolved">
        <h3> Activities </h3>
        <div class="articleList">
          <PostCard 
            v-for="activity in pageActivities" 
            :key="activity.id"
            :type="'activity'" 
            :post="activity">
          </PostCard>
        </div>
        <!-- Filler Div if announcements are not enough for the page -->
        <div style="height:460px"
          v-if="pageActivities.length <= 4">
        </div>
        <!-- FDiv end -->
        <div class="pageBtn">
            <nuxt-link 
              :class="{ disabled: isFirstPage }" 
              :to="`/activities/page/${+this.$route.params.page - 1}`"> 
              &#60;&#60;  Previous
            </nuxt-link>
            <p> Page {{ this.$route.params.page }} of {{ pageCount }} </p>
            <nuxt-link 
              :class="{ disabled:isLastPage }"
              :to="`/activities/page/${+this.$route.params.page + 1}`">
              Next  &#62;&#62;
            </nuxt-link>
        </div>
    </div>
    <LoadingDiv v-else />
  </section>
</template>

<script>
import loading from '~/plugins/loading.js'

export default {
    name: 'ActivitiesPage',
    mixins: [loading],
    head(){
      return{
        title: `Activities - Page ${this.$route.params.page} - Mauaque Resettlement Elementary School`
      }
    },
    async mounted(){
      await this.$store.dispatch('activity/fetchPageActivities', this.$route.params.page)
      this.setDataResolved()
    },
    computed: {
      isLastPage(){
        return this.$route.params.page >= this.$store.state.activity.pageCount
      },
      isFirstPage(){
        return this.$route.params.page <= 1
      },
      pageActivities(){
        return this.$store.state.activity.pageActivities
      },
      pageCount(){
        return this.$store.state.activity.pageCount
      }
    }
}
</script>

<style scoped>
a.disabled{
  pointer-events:none;
  color:#AAA;
  background:#F5F5F5;
  border-color: #AAA;
}
</style>
