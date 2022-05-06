<template>
    <div class="sidebar">
        <div class="events">
          <div class="eventsList">
              <h4>Upcoming Events</h4>
              <div class="event">
                  <div class="eventDetails">
                      <div>
                          <p class="eventLabel">What</p>
                          <p class="eventInput" id="eventScheduled">Parents Teacher Meeting</p>
                          <p class="eventLabel">When</p>
                          <p class="eventInput" id="eventTime">April 16, 2021   8:00am - 10:am</p>
                          <p class="eventLabel">Where</p>
                          <p class="eventInput" id="eventLocation">School Grounds</p>
                          
                      </div>
                      <div class="dropdownEvent">
                      </div>
                  </div>
                  <div class="eventDescription">
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                  </div>
              </div>

              <div class="event">
                  <div class="eventDetails">
                      <div>
                          <p class="eventLabel">What</p>
                          <p class="eventInput" id="eventScheduled">Parents Teacher Meeting</p>
                          <p class="eventLabel">When</p>
                          <p class="eventInput" id="eventTime">April 16, 2021   8:00am - 10:am</p>
                          <p class="eventLabel">Where</p>
                          <p class="eventInput" id="eventLocation">School Grounds</p>
                          
                      </div>
                      <div class="dropdownEvent">
                      </div>
                  </div>
                  <div class="eventDescription">
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                  </div>
              </div>
          </div> 
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
.events {
  padding-top: 6%;
  padding-left: 5%;
  justify-content: space-between;
  position: relative;
}
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
  margin-top: 117px;
  border-left: 7.5px solid #329bd6;
  border-right: 7.5px solid #329bd6;
  border-bottom: 15px solid white;}

.dropDownBtn {
  margin-bottom: 2px;
  margin-left: 6px;}
  
.eventDescription {
  background: white;
  width: 100%;
  min-height: 50px;
  padding: 15px;
}
</style>