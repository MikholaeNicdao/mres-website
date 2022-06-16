<template>
    <div class="adminSchedule">
        <div class="schduleContainer">
            <form>
                <div class="scheduleButton">
                    <h3>Upcoming Events</h3>
                    <div>
                        <button @click="addForm" type="button"><img src="/add.png">Add Event</button>
                        <button @click.prevent="submitForm" type="submit">Save</button>
                    </div>
                </div>
                <ScheduleForm v-for="form in formList" :key="formList.indexOf(form)" 
                :form="form" @deleted="deleteForm" />
            </form>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'adminView',
    data(){
        return {
            formList: [
                {
                    title: "",
                    date: "",
                    location: "",
                    time: "00:00",
                    description: "",
                    errors: {
                        title: "",
                        location: "",
                        description: "",
                    }
                }
            ]
        }
    },
    methods:{
        addForm(){
            this.formList.push(
                {
                    title: "",
                    description: "",
                    date: "",
                    time: "00:00",
                    location: "",
                    errors: {
                        title: "",
                        location: "",
                        description: "",
                    }
                }
            )
        },
        deleteForm(form){
            if (this.formList.length <= 1) 
                return
            const formIndex = this.formList.indexOf(form)
            this.formList.splice(formIndex, 1)
        },
        isValidForm(form){
            let isValid = true
            for (const form of this.formList) {
                if (form.title === "") {
                    form.errors.title = "Required Field"
                    isValid = false
                }
                if (form.location === "") {
                    form.errors.location = "Required Field"
                    isValid = false
                }
            }
            
            return isValid
        },
        async submitForm(){
            if(!this.isValidForm()) 
                return
            for (const form of this.formList) {
                await this.$store.dispatch("event/addEvent", form)
            }
            this.formList = []
            this.addForm()
        }
    }
}
</script>

<style>
.scheduleButton h3{
    font-size: 25px;
    color: #404040;
}
.scheduleButton {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.scheduleButton button[type='submit'] {
    border: none;
    background: #329bd6;
    color: white;
    padding: 7px;
    font-size: 15px;
    font-weight: bold;
    width: 91px;
    border-radius: 5px;
    margin-left: 35px;
}
.scheduleButton button[type='button'] {
    border: none;
    background: none;
    color: #329bd6;
    font-size: 17px;
}

.adminSchedule {
    padding: 3% 4%;
    width: 80%;
}

.scheduleList {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
}
</style>