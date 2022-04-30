<template>
    <div class="sidebar">
        <div class="events">
            <div class="eventsList">
                <h4>Upcoming Events</h4>
                <div class="event">
                    <div class="sidebarItem"></div>
                    <div class="eventContainer">
                        <p class="scheduledEvent">Parents Teacher Meeting</p>
                        <div>
                            <p class="scheduledDate">September 21,2021</p>
                            <p class="scheduledTime">8:00am - 10:00am</p>
                        </div>
                    </div>
                </div>
                <div class="event">
                    <div class="sidebarItem"></div>
                    <div class="eventContainer">
                        <p class="scheduledEvent">Parents Teacher Meeting</p>
                        <div>
                            <p class="scheduledDate">September 21,2021</p>
                            <p class="scheduledTime">8:00am - 10:00am</p>
                        </div>
                    </div>
                </div>
                <div class="event">
                    <div class="sidebarItem"></div>
                    <div class="eventContainer">
                        <p class="scheduledEvent">Parents Teacher Meeting</p>
                        <div>
                            <p class="scheduledDate">September 21,2021</p>
                            <p class="scheduledTime">8:00am - 10:00am</p>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" class="viewCalendar">View Calendar</a>
            <div class="viewItem"></div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>

<style>
.sidebar {
  width:35%;
  display: inline-block;
  background-color: #e6e6e6;
}
.events h4 { 
  padding-left: 6%;
  padding-bottom: 25px;
  font-size: 40px;
  color: #404040;
}
.events {
  padding-top: 6%;
  padding-left: 5%;
  padding-right: 5%;
  justify-content: space-between;
  min-height: 100vh;
  position: relative;
}
.event {
  display: flex; 
  padding-top: 10px;
  padding-left: 15px;
}
p.scheduledEvent {
  font-size: 25px;
  font-weight: bold; 
  color:#329bd6;
}
.eventContainer {
    padding: 10px 10px 10px 13px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: flex-start;width: 550px;
}
p.scheduledDate {
  float: left;
}
p.scheduledDate {
  font-size:20px; 
  color:gray; 
  margin-top: 5px;
  margin-right: 25px;
}
p.scheduledTime {
  font-size:20px; 
  color:gray; 
  margin-top: 5px;
}
.sidebarItem {
  background-color: #329bd6;
  width: 10px;
  height: 70px;
  margin-top: 4px;
}
</style>