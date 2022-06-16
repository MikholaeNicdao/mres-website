<template>
  <div class=dashboard v-if="dataResolved"
    @click="showFilter = false">
        <div class="dashEvents" >
            <h3>Upcoming Events</h3>
            <div class="dashEventContainer">
                <div class="dashEventBox" v-for="event in recentEvents" :key="event.id">
                    <div>
                        <p class="dashEventLabel">What</p>
                        <p class="dashEventDetail"> {{ event.title }} </p>
                        <p class="dashEventLabel">When</p>  
                        <p class="dashEventDetail">{{ eventSetting(event.date, event.time) }}</p>
                        <p class="dashEventLabel">Where</p>  
                        <p class="dashEventDetail"> {{ event.location }} </p>   
                    </div>
                </div>
            </div>
        </div>
        <div class="dashPost">
            <div class="dashHeader">
                <h3>Latest Posts</h3>
                <div class="dashFilter">
                    <div class="filterBox" 
                        @click.stop="toggleFilter">
                        <div class="filterDropdown">
                            <img src="/filter-gray.png">
                            <label class="dashLabel">Filter</label>
                            <div></div>
                        </div>
                    </div>
                    <div id="filterList" 
                        @click.stop="showFilter=true" 
                        v-if="showFilter">
                        <div class="filterContainer">  
                            <ul>
                                Post Type:
                                <li>
                                    <label class="filterOption">
                                        <input type="radio" name="filterPostType" id="filter1" value="all"
                                            v-model="selectedPostType">
                                        All
                                    </label>
                                </li>
                                <li>
                                    <label class="filterOption">
                                        <input type="radio" name="filterPostType" id="filter1" value="announcements"
                                            v-model="selectedPostType">
                                        Announcements only
                                    </label>
                                </li>
                                <li>
                                    <label class="filterOption">
                                        <input type="radio" name="filterPostType" id="filter2" value="activities"
                                            v-model="selectedPostType">
                                        Activities only
                                    </label>
                                </li>
                            </ul>
                            <ul>
                                Post Date:
                                <li>
                                    <label class="filterOption">
                                        <input type="radio" name="postAge" id="filter3" value="all"
                                            v-model="postAge">
                                        All
                                    </label>
                                </li>
                                <li>
                                    <label class="filterOption">
                                        <input type="radio" name="postAge" id="filter3" value="hourOld"
                                            v-model="postAge">
                                        Last Hour
                                    </label>
                                </li>
                                <li>
                                    <label class="filterOption">
                                        <input type="radio" name="postAge" id="filter4" value="dayOld"
                                            v-model="postAge">
                                        Last 24 hours
                                    </label>
                                </li>
                                <li>
                                    <label class="filterOption">
                                        <input type="radio" name="postAge" id="filter5" value="weekOld"
                                            v-model="postAge">
                                        Last 7 days
                                    </label>
                                </li>
                                <li>
                                    <label class="filterOption">
                                        <input type="radio" name="postAge" id="filter6" value="monthOld"
                                            v-model="postAge">
                                        Last 4 weeks
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dashTable">
                <table class="dashTableContainer">
                    <template v-if="selectedPostType === 'activities' || selectedPostType === 'all'">
                        <tr v-for="activity in activities" :key="`act${activity.id}`">
                            <th class="dashName"> {{ activity.title }} </th>
                            <th class="dashType">Activity</th>
                            <th class="dashDate">Posted on {{ activity.formattedCreatedAt }}</th>
                        </tr>
                    </template>
                    <template v-if="selectedPostType === 'announcements' || selectedPostType === 'all'">
                        <tr v-for="announcement in announcements" :key="`ann${announcement.id}`">
                            <th class="dashName"> {{ announcement.title }} </th>
                            <th class="dashType">Announcement</th>
                            <th class="dashDate">Posted on {{ announcement.formattedCreatedAt }}</th>
                        </tr>
                    </template>
                </table>
            </div>
        </div>
    </div>
    <LoadingDiv v-else />
</template>

<script>
import loading from '~/plugins/loading.js'
import { formatDate, formatTime } from '~/plugins/textformatter.js'

export default {
    layout: 'adminView',
    mixins: [loading],
    head(){
        return{
            title: "Overview - Mauaque Resettlement Elementary School"
        }
    },
    async mounted(){
        await this.$store.dispatch("event/fetchEvents")
        await this.$store.dispatch("event/fetchRecentEvents", { count: 3})
        await this.$store.dispatch("activity/fetchActivities")
        await this.$store.dispatch("announcement/fetchAnnouncements")
        this.setDataResolved()
    },
    data(){
        return{
            selectedPostType: 'all',
            postAge: 'all',
            showFilter: false,
        }
    },
    methods:{
        toggleFilter(){
            this.showFilter = !this.showFilter
        },
        eventSetting(date, time){
            return `${formatDate(date)} ${formatTime(time)}`
        },
        isMonthOld(date){
            const pastTime = new Date(date);
            const now = new Date();

            const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;

            const timeDiffInMs = now.getTime() - pastTime.getTime();

            if(timeDiffInMs >= thirtyDaysInMs){
                return false
            }
            return true
        },
        isDayOld(date){
            const pastTime = new Date(date);
            const now = new Date();

            const oneDayInMs = 24 * 60 * 60 * 1000;

            const timeDiffInMs = now.getTime() - pastTime.getTime();

            if(timeDiffInMs >= oneDayInMs){
                return false
            }
            return true
        },
        isWeekOld(date){
            const pastTime = new Date(date);
            const now = new Date();

            const oneWeekInMs = 7 * 24 * 60 * 60 * 1000;

            const timeDiffInMs = now.getTime() - pastTime.getTime();

            if(timeDiffInMs >= oneWeekInMs){
                return false
            }
            return true
        },
        isHourOld(date){
            const pastTime = new Date(date)
            const now = new Date()

            const oneDayInMs = 60 * 60 * 1000

            const timeDiffInMs = now.getTime() - pastTime.getTime()

            if(timeDiffInMs >= oneDayInMs){
                return false
            }
            return true
        },
        filterPost(postList){
            if(this.postAge === 'hourOld') postList  = postList.filter(post => this.isHourOld(post.createdAt))
            if(this.postAge === 'dayOld') postList  = postList.filter(post => this.isDayOld(post.createdAt))
            if(this.postAge === 'weekOld') postList  = postList.filter(post => this.isWeekOld(post.createdAt))
            if(this.postAge === 'monthOld') postList  = postList.filter(post => this.isMonthOld(post.createdAt))
            return postList
        }
    },
    computed:{
        recentEvents(){
            return this.$store.state.event.recentEvents
        },
        announcements(){
            const announcements = [...this.$store.state.announcement.announcements]
            const filteredAnnouncements = this.filterPost(announcements)
            return filteredAnnouncements.slice(0, Math.min(filteredAnnouncements.length, 5))
        },
        activities(){
            let activities = [...this.$store.state.activity.activities]
            const filteredActivities = this.filterPost(activities)
            return filteredActivities.slice(0, Math.min(filteredActivities.length, 5))
        },
        postBoxesUnchecked(){
            return !this.showAnnouncements && !this.showActivities
        }
    }
}
</script>

<style>
.dashboard {
    width: 80%;
    padding: 3% 4%;
}
.dashEventContainer {
    margin-top: 20px;
    width: 100%;
    display: flex;
}
.dashEventBox div {
    background: #dddddd;
    padding: 15px;
}
.dashEventBox {
    width: calc(100%/3);
    padding: 0 10px;
    overflow-wrap: anywhere;
}
p.dashEventLabel {
    font-size: 14px;
    color: gray;
}
p.dashEventDetail {
    padding-bottom: 8px;
    font-size: 15px;
}
.dashHeader {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
}
.dashPost {
    width: 100%;
    margin-top: 40px;
}
.filterBox {
    display: flex;
    padding: 2px 5px;
    border: 1px solid silver;
    width: 100%;
}
.filterDropdown div {
    width: 12px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 8px solid gray;
}
.filterDropdown {
    display: flex;
    align-items: center;
    color: gray;
    width: 100%;
}
.filterList {
    display:none;
}
.filterDropdown:hover .filterList  {
    display:block;
}
.filterDropdown img {
    width: 16px;
    margin-right: 5px;
}
label.dashLabel {
    font-size: 14px;
    width: 100%;
}
div#filterList {
    position: absolute;
}
div#filterList li {
    list-style: none;
    font-size: 14px;
    padding: 2px 0;
}
.dashFilter {
    width: 200px;
}
.dashTable {
    padding-top: 25px;
    width: 100%;
    margin: 0;
}
.dashTable th {
    width: calc(100%/3);
    font-size: 14px;
    font-weight: normal;
    padding: 12px 4px 5px;
    color: gray;
}
table.dashTableContainer {
    width: 100%;
    text-align: left;
    border-collapse: collapse;
}
.dashTable tr {
    border-bottom: 1px solid silver;
}
.filterContainer {
    padding: 10px 6px 6px;
    border: 1px solid silver;
    background: white;
    border-top: none;
    width: 200px;
    position: relative;
    z-index: 1;
}

th.dashName {
    font-size: 15px;
    color: #404040;
    font-weight: bold;
}
th.dashDate{
    text-align: right;
}
th.dashType{
    text-align: right;
}
</style>