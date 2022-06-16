<template>
  <div class="scheduleList">
        <div class="scheduledEvent">
            <button @click="deleteForm" type="button"><img src="/cancel.png"></button>
            <div>
                <label for="eventName">What:</label>
                <input type="text" name="eventName" id="eventName"
                    :class="{ incorrectInput:form.errors.title }"
                    @keypress="form.errors.title = ''" 
                    v-model="form.title">
                <span class="incorrectInput"> {{ form.errors.title }} </span>
            </div>
            <div>
                <label for="eventDate">When:</label>
                <input type="date" v-model="form.date" name="eventDate" id="eventDate">
                <input type="time" v-model="form.time" name="eventTime" id="eventTime">
            </div>
            <div>
                <label for="eventLocation">Where:</label>
                <input type="text"  name="eventLocation" id="eventLocation"
                    :class="{ incorrectInput:form.errors.location }"
                    @keypress="form.errors.location = ''" 
                    v-model="form.location">
                <span class="incorrectInput"> {{ form.errors.location }} </span>
            </div>
            <textarea v-model="form.description" name="eventDescription" id="eventDescription" placeholder="Add Description"></textarea>
        </div>
    </div>
</template>

<script>
export default {
    props: ['form'],
    methods:{
        deleteForm(){
            this.$emit('deleted', this.form)
        }
    }
}
</script>

<style>
.scheduledEvent {
    width: 600px;
    border-radius: 5px;;
    padding: 15px 20px;
    border: 1px solid silver;
    margin: 10px 0;
}

.scheduledEvent div label {
    font-size: 15px;
    color: #404040;
    margin-right: 7px;
}
.scheduledEvent div {
    padding: 7px 0;
    width: 100%;
    border-bottom: 1px solid silver;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.scheduledEvent div input {
    width: 92%;
    padding: 3px;
    font-size: 14px;
    border: none;
}
input#eventTime {
    margin-left: 8px;
}
textarea#eventDescription {
    width: 100%;
    padding: 5px;
    margin-top: 5px;
    height: 100px;
    border: none;
}
.scheduledEvent button img {
    width: 25px;
}      
.scheduleButton button img {
    width: 18px;
    float: left;
    margin-right: 5px;
}
.scheduledEvent button {
    border: none;
    background: no-repeat;
    float: right;
}
</style>