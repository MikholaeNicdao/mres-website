<template>
  <section class="activitySection">
    <h4>School Activities</h4>
    <div class="activities">
        <div class="activityList">
            <div class="activityContainer" 
                v-for="activity in activities" 
                :key="activity.id">
                <nuxt-link :to="`/activities/${activity.id}`" class="activity">
                    <img :src="`data:image/jpg; base64, ${activity.coverPhoto}`" :alt="activity.title">
                    <div class="activityOverlay">
                        <div class="activityOverlayContent">
                            <h5>{{ activity.title }}</h5>
                            <p>{{ activity.formattedCreatedAt }}</p>
                        </div>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
    
</section>
</template>
<script>
export default {
    computed:{
        activities(){
            return this.$store.state.activity.recentActivities
        }
    }
}
</script>
<style>
.activitySection {
    display: inline-block;
    padding: 57px 4% 85px;
    width: 100vw;
}

.activitySection h4 {
    color: #404040;
    font-size: 18px;
    padding-bottom: 25px;
}

.activityList {
    margin: 0 auto;
    width: 100%;
}

.activityContainer {
    width: calc(100%/4);
    padding: 10px;
    float: left;
}

.activityContainer img {
    width: 100%;
    height: 230px;
    object-fit: cover;
}

.activities {
    display: block;
    width: 100%;
}

.activityOverlay {
    position: absolute; 
    opacity: 0;
    display: flex;}

.activityOverlay h5 {
    font-size: 18px;
    padding-bottom: 5px;
}

.activityOverlay p {
    font-size: 14px;
}

.activityOverlayContent {
    position: absolute; 
    bottom: 20px; 
    left: 15px;  
    color:white;
    width: 400px;}

.activityContainer:hover {
    transform:perspective(10px); }

.activityContainer:hover a .activityOverlay {
    opacity:1; 
    transition: .5s;
}

.activityContainer:hover img {
    position: relative; 
    filter:brightness(50%); 
    transition: .5s; 
}

button.activityButton {
    width: 60px;
    border: none;
    color: silver;
    height: 267.33px;}

.activityButton:hover {
    background: #a6a6a6;}
</style>