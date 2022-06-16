<template>
  <div class=adminContinuityPlan v-if="dataResolved">
        <form @submit.prevent="">
            <div class="cplanHeader">
                <h3>Continuity Plan</h3>
                <!-- <button type="submit" id="cplanSave">Save</button> -->
            </div>
            <div class="cplanContainer">
                <div class="cplanView">
                    <div style="width:100%; height:500px">
                        <img class="cplanImagePreview"
                            v-if="selectedSlide" 
                            :src="`data:image/jpg; base64, ${selectedSlide.coverPhoto}`">
                    </div>
                    <div class="cplanButtons">
                        <div class="slideButtons">
                            <button type="button" class="prevSlide"></button>
                            <button type="button" class="nextSlide"></button>
                        </div>
                        <div class="slideEdit">
                            <button class="cplanAddImage"><label for="slideUpload">Add Slide</label></button>
                            <button class="cplanAddImage"><label for="slideUpdate">Change Slide Image</label></button>
                            
                            <button id="deleteSlide"
                                @click="deleteSelectedSlide">
                                Delete Slide
                            </button>
                        </div>
                    </div> 
                </div>
                <div class="cplanSlides">
                    <div class="slideContainer" v-for="slide in slides" :key="slide.id">
                        <p>{{ slide.page }}</p>
                        <img 
                        :src="`data:image/jpg; base64, ${slide.coverPhoto}`"
                        :class="{ selectedSlide:isSelectedSlide(slide) }"
                        @click="selectedSlideIndex = slides.indexOf(slide)">
                    </div>
                </div>
                <input type="file" multiple id="slideUpload" style="display:none" @change="uploadSlide($event)">
                <input type="file" id="slideUpdate" style="display:none" @change="updateSlide($event)">
            </div>
        </form>
    </div>
    <LoadingDiv v-else />
</template>

<script>
import loading from '~/plugins/loading.js'
import validations from '~/plugins/validations.js'

export default {
    name: 'adminLCP',
    layout: 'adminView',
    mixins: [loading, validations],
    async mounted(){
        await this.$store.dispatch("lcp/fetchSlides")
        // this.selectedSlide = this.slides[0]
        this.selectedSlideIndex = 0
        this.setDataResolved()
    },
    data(){
        return{
            // selectedSlide: "",
            selectedSlideIndex: 0
        }
    },
    methods:{
        async uploadSlide(event){
            for (const slide of event.target.files) {
                if (!this.isValidImage(slide)) return
                const fd = new FormData()
                const lastSlide = this.slides[this.slides.length-1]

                fd.append('coverPhoto', slide)
                fd.append('page', lastSlide.page + 1)
                
                await this.$store.dispatch("lcp/addSlides", fd)
            }

            alert("New slide(s) added")

            document.getElementById('slideUpload').value = "";
        },
        async updateSlide(event){
            let updatedImage = event.target.files[0]

            if (!this.isValidImage(updatedImage)) return

            const fd = new FormData()

            fd.append('coverPhoto', updatedImage)
            fd.append('page', this.selectedSlide.page)
            
            await this.$store.dispatch("lcp/updateSlide", { formData:fd, id:this.selectedSlide.id })

            // Success
            alert("Slide updated")

            document.getElementById('slideUpdate').value = "";
        },
        async deleteSelectedSlide(){
            if(!confirm("Are you sure?")) return

            const currentIndex = this.slides.indexOf(this.selectedSlide)
            const isLastSlide = this.slides.length - 1 === this.selectedSlideIndex

            await this.$store.dispatch("lcp/deleteSlide", this.selectedSlide.id)
            alert("Slide deleted")

            this.selectedSlideIndex = isLastSlide ? 0 : currentIndex
        },
        isSelectedSlide(slide){
            return this.slides.indexOf(this.selectedSlide) === this.slides.indexOf(slide)
        }
    },
    computed:{
        slides(){
            return this.$store.state.lcp.slides
        },
        selectedSlide(){
            return this.slides[this.selectedSlideIndex]
        }
    }
}
</script>

<style>
.adminContinuityPlan {
    width: 80%;
    padding: 3% 4%;
}

.cplanView {
    width: 75%;
}

.cplanSlides {
    width: 25%;
    overflow-y: scroll;
    height: 80vh;
}

img.cplanImagePreview {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.cplanHeader {
    display: flex;
    justify-content: space-between;
}

.cplanButtons {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

.cplanContainer {
    display: flex;
    flex-direction: row;
    margin-top: 40px;
}

.slideContainer {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 15px;
    margin-right: 10px;
}

.slideContainer img {
    width: 150px;
    height: 115px;
    margin-left: 10px;
    object-fit: cover;
}

img.selectedSlide{
    border: 4px solid black;
}

button.cplanAddImage {
    padding: 0 20px;
    border: none;
    background: none;
    border-right: 1px solid silver;
    font-size: 15px;
    color: gray;
    display: flex;
}

button#deleteSlide {
    border: none;
    background: none;
    padding-left: 15px;
    font-size: 15px;
    color: gray;
}

button#cplanSave {
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

button.cplanAddImage input {
    width: 15px;
    margin-right: 5px;
}

.slideEdit {
    display: flex;
    margin-right: 10px;
}
</style>