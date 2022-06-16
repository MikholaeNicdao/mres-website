<template>
  <div class="continuityPlan" v-if="dataResolved">
        <h3>Basic Education Learning Continuity Plan</h3>   
        <div class="slide">
            <div class="slideContainer">
            <img class="powerpoint slideAnimation" 
                :src="`data:image/jpg; base64, ${slides[currentPage-1].coverPhoto}`" 
                :key="currentPage"
                @mouseenter="stopAutoSlide"
                @mouseleave="resetInterval">
            </div>
            <div class="slideButtons">
                <button type="button" class="prevSlide" 
                    @click="prevSlide">
                </button>
                <div class="slidePageCount">
                    <p class="slidePage"> {{ currentPage }} </p><p> / </p><p class="slideCount">{{ slides.length }}</p>
                </div>
                <button type="button" class="nextSlide" 
                    @click="nextSlide">
                </button>
            </div>
        </div>
  </div>
  <LoadingDiv v-else />
</template>

<script>
import loading from '~/plugins/loading.js'

export default {
    layout: 'about',
    mixins: [loading],
    async mounted(){
        await this.$store.dispatch('lcp/fetchSlides')
        this.setDataResolved()
    
    },
    data(){
        return{
            currentPage: 1,
            intervalId : setInterval(this.nextSlide, 10000)
        }
    },
    methods:{
        nextSlide(){
            this.currentPage = this.isLastSlide 
                ? 1 
                : this.currentPage += 1
            this.resetInterval()
        },
        prevSlide(){
            this.currentPage = this.isFirstSlide 
                ? this.slides.length 
                : this.currentPage -= 1
            this.resetInterval()
        },
        stopAutoSlide(){
            clearInterval(this.intervalId)
        },
        resetInterval(){
            this.stopAutoSlide()
            this.intervalId = setInterval(this.nextSlide, 10000);
        }
    },
    computed:{
        slides(){
            return this.$store.state.lcp.slides
        },
        isLastSlide(){
            return this.currentPage === this.slides.length
        },
        isFirstSlide(){
            return this.currentPage === 1
        }
    }
}
</script>

<style>
.continuityPlan {
    padding: 3% 4%;
    width: 100%;
}

.continuityPlan h3{
    color: #404040;
    font-size: 30px;
    width: 100%; 
    text-align: center; 
}

div.slide {
    display: flex;
    justify-content: center;
    padding-top: 30px;
    flex-direction: column;
    align-items: center;
}

div.slideContainer{
    width:800px; 
    height:450px;
    margin-bottom: 10px;
}

div.slideContainer:hover{
    /* width:800px; 
    height:470px; */
    border: 10px solid silver
    /* margin-bottom: 10px; */
}

img.powerpoint {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

img.slideAnimation{
    animation-name: displaySlide;
    animation-duration: 1s;
}

div.slideButtons, #slidePageCount {
    display: flex;
    align-items: center;
}

div.slideButtons button {
    margin: 0px 10px;
    width: 16px;
    height: 16px;
    border-top: 8px solid white;
    border-bottom: 8px solid white;
}

button.nextSlide {
    border-left: 16px solid gray;
    border-right: none;
}

button.prevSlide {
    border-left: none;
    border-right: 16px solid gray;
}

button.prevSlide:hover {
    border-right-color: silver;
}

button.nextSlide:hover {
    border-left-color: silver;
}

div.slidePageCount p {
    padding: 0 8px;
    font-size: 16px;
    color: gray;
}

.slidePageCount {
    display: flex;
}

@keyframes displaySlide {
    from { opacity: 0%; }
    to { opacity: 100%; }
}
</style>