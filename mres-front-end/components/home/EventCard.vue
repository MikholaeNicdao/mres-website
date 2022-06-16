<template>
    <div class="event" v-if="this.event">
        <div @click="toggle" class="eventDetails">
            <div>
                <p class="eventLabel">What</p>
                <p class="eventInput" id="eventScheduled"> {{ event.title }} </p>
                <p v-if="opened" class="eventLabel">When</p>
                <p v-if="opened" class="eventInput" id="eventTime">{{ eventSetting }} </p>
                <p v-if="opened" class="eventLabel">Where</p>
                <p v-if="opened" class="eventInput" id="eventLocation"> {{  event.location }}</p> 
            </div>
            <div class="dropdownEvent" :class="{'flipped':!opened}">
            </div>
        </div>
        <div v-if="opened" class="eventDescription">
            <p>{{ event.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['event'],
    data(){
        return {
            opened:true
        }
    },
    methods:{
        toggle(){
            this.opened = !this.opened
        }
    },
    computed: {
        formattedDate(){
            const date = new Date(this.event.date)
            
            return `
                ${date.toLocaleString('default', { month: 'long' })} 
                ${date.getDate()}, 
                ${date.getFullYear()}
            `
        },
        formattedTime(){
            let hrMin = this.event.time.slice(0, 5)
            let hr = parseInt(hrMin.split(':')[0])
            let hrFormatted = (hr <= 12) ?  hr : (hr - 12)
            let min = hrMin.split(':')[1] 
            let dayHalf = (hr <= 12) ?  " AM" : " PM"
            if (hr === 0) hrFormatted = 12
            return `${hrFormatted}:${min} ${dayHalf}`
        },
        eventSetting(){
            return `${this.formattedDate} ${this.formattedTime}`
        }
    }
}
</script>

<style>
.event {
  margin-bottom: 20px;
}
.eventContainer {
    padding: 10px 10px 10px 13px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: flex-start;
    width: 550px;
}
.eventDetails {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #329bd6;
  padding: 15px;
}
.eventDescription {
  background: white;
  width: 100%;
  min-height: 50px;
  padding: 15px;
}
p.eventLabel {
  text-transform: uppercase;
  font-size: 14px;
}
p.eventInput {
  color: white;
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 8px;
}
.dropdownEvent {
  background: white;
  width: 15px !important;
  height: 15px;
  /* margin-top: 117px; */
  border-left: 7.5px solid #329bd6;
  border-right: 7.5px solid #329bd6;
  border-bottom: 15px solid white;
}
.flipped{
    transform: scaleY(-1);
}

</style>