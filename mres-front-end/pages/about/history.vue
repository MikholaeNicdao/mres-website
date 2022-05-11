<template>
    <div>
        <div class="background">
            <img src="~/assets/images/schoolSlider.png">
        </div>

        <section>
            <div class="history">
                <h3>History</h3>
                <div class="historyContainer">
                        <div><img src="~/assets/images/history.jpg" alt="MRES History"></div>     
                        <p>
                            The word Mauaque comes from the word "wakat", a Kapampangan word which means "root" symbolizing new beginning, new life and new hope of struggling for a better life which will lead to the rise and growth of the Mount Pinatubo Victims.
                            <br><br>
                            Republic Act 7637, as amended, created the Mount Pinatubo Commission (MPC) and mandated it to undertake the rehabilitation and socio-economic development of the areas and the families that were affected by the eruption of Mt. Pinatubo and its after effects.
                            <br><br>
                            It was 1993, when the Mauaque Resettlement Elementary School started serving the less fortunate lahar victims of the different barangays namely Dolores, Tabun, Cacacutud, San Joaquin, Sta. Rita and some Bacolor under Mabalacat North District.
                            <br><br>
                            From 1993-1999, Dr. Rafael l. Dimarucut was the principal, 1999 to January 2000 the late Dr. Felicisima Delos Reyes took over. From February 2000 to June 2004, Dr. Marietta R. Medina was the principal followed by Dr. Lydia M. Luzuriaga from July 2004 up to July 2007. 
                            Through the initiative of Schools District Supervisor Madam Carmelita P. Sotto, the Mabalacat East District was created last March 26, 2008, wherein the Mauaque Resettlement Elementary School became the Central School of the district. From July 2008 to September 30, 
                            2013 the school principal is Mr. Ruel M. Manalese. From October 1, 2013 to April 2015 the principal was Mrs. Adelia I. Agliam and from April 2015 to 2019 Ms. Ruby C. Laquindanum and Dr. Ferdinand G. Nanquil from June 2019 to present.
                            <br><br>
                            At present, Mauaque Resettlement Elementary School has Sixty-two (62) teachers composed of two (2) Master Teacher II, Five (5) Master Teacher I, twenty-six (26) Teacher III, seventeen (17) Teacher II, eleven (11) Teacher I and three (3) SPED Teacher I. 
                            There are of course interventions / programs to enhance their capabilities and skills. Our Utility Aide with Plantilla, two (2) Security Guards and three (3) utilities funded by the School MOOE help in maintaining our school cleanliness and safety.
                            <br><br>
                            Because of the full cooperation and untiring support of all people living in the community which include the municipal officials, barangay officials, school administrators, teachers, parents and pupils, Mauaque Resettlement Elementary School a fast improving institution.
                        </p>
                </div>
            </div>    
        </section>
    </div>
</template>

<style>
.background img {
    width: 100%;
    height: auto;
    background-size: cover;
    background-position: 0 -183px;
    position: relative;
    filter: brightness(69%);
    z-index: -1;
    display: block;}

.history h3, .continuityPlan h3, 
.faculty h3, .coreValues h3, 
.mandate h3,.visionMission h3 {
    color: #404040;
    font-size: 30px;
    width: 100%; 
    text-align: center; }

img.historyImg {
    width: 550px;
    height: auto;}

.history,.continuityPlan {
    padding: 3% 4%;
    display: flex;
    flex-direction: column;}

.history p {
    font-size: 16px;}

.historyContainer {
    display: flex;
    flex-direction: row;
    margin-top: 40px;}

.historyContent {
    padding-left: 15px;}

.historyContainer div img {
    width: 700px;
    height: auto;
    margin: 0 20px 20px 0;}
</style>