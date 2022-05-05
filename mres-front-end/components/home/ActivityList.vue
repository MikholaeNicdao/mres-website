<template>
  <section class="activitySection">
    <h4>School Activities</h4>
    <div class="activities">
        <button type="button" class="activityButton"><div class="leftButton"></div></button>
        <div class="activityList">
            <div class="activityContainer">
                <a href="#" class="activity">
                    <img src="~assets/images/student.jpeg" alt="">
                    <div class="activityOverlay">
                        <div class="activityOverlayContent">
                            <h5>School Celebration</h5>
                            <p>Septermeber 17, 2021</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="activityContainer">
                <a href="#" class="activity">
                    <img src="~assets/images/student.jpeg" alt="">
                    <div class="activityOverlay">
                        <div class="activityOverlayContent">
                            <h5>School Celebration awwejiojj sdfjsdfjsdifjsdifj sdjfsdifjsdifj</h5>
                            <p>Septermeber 17, 2021</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="activityContainer">
                <a href="#" class="activity">
                    <img src="~assets/images/student.jpeg" alt="">
                    <div class="activityOverlay">
                        <div class="activityOverlayContent">
                            <h5>School Celebration dfgdfg dgdfggdfg dgfgdfg</h5>
                            <p>Septermeber 17, 2021</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="activityContainer">
                <a href="#" class="activity">
                    <img src="~assets/images/student.jpeg" alt="">
                    <div class="activityOverlay">
                        <div class="activityOverlayContent">
                            <h5>School Celebration</h5>
                            <p>Septermeber 17, 2021</p>
                        </div>
                    </div>
                </a>
            </div>
            
        </div>
        <button type="button" class="activityButton"><div class="rightButton"></div></button>
    </div>
    
</section>
</template>
<style>
.activitySection {
    display: inline-block;
    padding: 6% 3% 10%;
    width: 100vw;}

.activityList {
    width: 100%;
    display: flex;
    justify-content: space-between;
    overflow: hidden;}

.activityContainer img {
    width: 400px;
    height: auto;}

.activities {
    display: flex;
    max-height: 300px;
    flex-direction: row;
    justify-content: space-around;}

.activityOverlay {
    position: absolute; 
    opacity: 0;
    display: flex;}

.activityOverlay h5 {
    font-size: 30px; 
    padding-bottom: 5px;}

.activityOverlay p {
    font-size: 16px;}

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
    transition: .5s;}

.activityContainer:hover img {
    position: relative; 
    filter:brightness(50%); 
    transition: .5s; 
    width: 430px;}

button.activityButton {
    width: 60px;
    border: none;
    color: silver;
    height: 267.33px;}

.activityButton:hover {
    background: #a6a6a6;}

.activityButton .leftButton {
    margin: 15px;
    border-top: 40px solid transparent;
    border-bottom: 40px solid transparent;
    border-right: 30px solid gray;}

.activityButton .rightButton {
    margin: 15px;
    border-top: 40px solid transparent;
    border-bottom: 40px solid transparent;
    border-left: 30px solid gray;}
</style>