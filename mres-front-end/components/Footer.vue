<template>
    <footer>
        <div class="footer">
            <div class="border"></div>
            <div class="footerContent">
                <p class="connectText">Connect with Us</p>
                <div class="email">
                    <img src="~assets/images/email.png">
                    <p>mauaques.es@depedmabalacat.org</p>
                </div>
                <div class="address">
                    <img src="~assets/images/location.png">
                    <p>23rd Street Mauaque Resettlement Elementary School 2010</p>
                </div>
                <div class="socialMedia">
                    <p>Join us on Facebook</p>
                    <img src="~assets/images/facebook.png">
                </div>
            </div>
        </div>
    </footer>
</template>

<style>
.footer {
    background-color: #329bd6;
    height: 35vh;
}

/* .border {background-color: transparent;height: 5vh;border-left: 50vw solid transparent;border-right: 50vw solid transparent;border-top: 5vh solid white;} */

.footerContent {
    text-align: center;
    padding-top: 60px;
}

.footerContent div {
    display: flex;
    justify-content: center;
}

.footerContent img {
    width: 15px;
    height: 15px;
    margin: 0 5px;
}

.footerContent p {
    color: white;
    padding-top: 1px;
    font-size: 12px;
}

p.connectText {
    font-weight: bold;
    font-size: 12px;
}

.email {
    padding-top: 25px;
    padding-bottom: 7px;
}

.socialMedia {
    padding-top: 26px;
}

.socialMedia p {
    padding-top: 4px;
    font-size: 12px;
}

.socialMedia img {
    width: 17px;
    height: 17px;
}
</style>