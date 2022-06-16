<template>
    <div class="sidebar">
        <div class="events">
          <div class="eventsList">
              <h4>Upcoming Events</h4>
              <EventCard v-for="event in events" :key="event.id" :event="event" />
          </div> 
      </div>
    </div>
</template>
<script>
export default {
  async mounted(){
    await this.$store.dispatch("event/fetchEvents")
  },
  computed:{
    events(){
      return this.$store.state.event.recentEvents
    }
  }
}
</script>

<style scoped>
.sidebar {
  width:35%;
  display: inline-block;
  background-color: #e6e6e6;
}
.events {
  padding-top: 6%;
  padding-left: 5%;
  justify-content: space-between;
  position: relative;
}
.dropDownBtn {
  margin-bottom: 2px;
  margin-left: 6px;
}

</style>