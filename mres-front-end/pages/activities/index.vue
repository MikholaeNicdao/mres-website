<template>
  <section>
    <div class="announcementPage">
        <h3> Activities </h3>
        <nuxt-link to="/activities/add"> Add activity </nuxt-link>
        <div class="articleList">
          <ActivityCard v-for="activity in pageActivities" :key="activity.id" :activity="activity">
          </ActivityCard>
        </div>
        <div class="pageBtn">
            <a v-if="requestedPage > 1" @click="prevPage"> &#60;&#60;  Previous</a>
            <p> Page {{ requestedPage }} of {{ lastPage }} </p>
            <a v-if="!isLastPage" @click="nextPage">Next  &#62;&#62;</a>
        </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ActivitiesPage',
    async beforeCreate(){
      await this.$store.dispatch('activity/fetchActivities')
    },
    methods: {
      nextPage(){
        this.$store.dispatch('activity/setPage', this.requestedPage + 1)
      },
      prevPage(){
        this.$store.dispatch('activity/setPage', this.requestedPage - 1)
      }
    },
    computed: {
      requestedPage(){
        return this.$store.state.activity.requestedPage
      },
      isLastPage(){
        return this.requestedPage === this.lastPage
      },
      ...mapGetters({
        pageActivities: 'activity/getPageActivities',
        lastPage: 'activity/getMaxPageCount'
      })
    }
}
</script>
