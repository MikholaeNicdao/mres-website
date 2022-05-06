<template>
  <section>
    <img src="~/assets/images/logoDeped.png" class="logoDeped">
    <div class="visionMission">
        <div class="vision">
            <h5>Vision</h5>
            <p>
                We dream of Filipinos who passionately love their country 
                and whose values and competencies enable them to realize their full 
                potential and contribute meaningfully to building the nation.
                <br><br>
                As a learner-centered public institution, the Department of Education 
                continuously improves itself to better serve its stakeholders. 
            </p>
        </div>
        <div class="mission">
            <h5>Mission</h5>
            <p>
                To protect and promote the right of every Filipino to quality, equitable, 
                culture-based, and complete basic education where: 
                <br><br>
                1. Students learn in a child-friendly, gender-sensitive, safe, and motivating environment.
                <br><br>
                2. Teachers facilitate learning and constantly nurture every learner. 
                <br><br>
                3. Administrators and staff, as stewards of the institution, ensure an enabling and supportive environment for effective learning to happen. 
                <br><br>
                4. Family, community, and other stakeholders are actively engaged and share responsibility for developing life-long learners.

            </p>
        </div>
    </div>

    <div class="coreValues">
        <h5>Core Values</h5>
        <div class="cvContent">
            <div class="cvImages">
                <img src="~/assets/images/cvDiyos.png">
                <p>Maka-Diyos</p>
            </div>
            <div class="cvImages">
                <img src="~/assets/images/cvTao.png">
                <p>Maka-Tao</p>
            </div>
            <div class="cvImages">
                <img src="~/assets/images/cvKalikasan.png">
                <p>Makakalikasan</p>
            </div>
            <div class="cvImages">
                <img src="~/assets/images/cvBansa.png">
                <p>Makabansa</p>
            </div>
        </div>
    </div>

    <div class="mandate">
        <h5>DepEd Mandate</h5>
        <p>The Department of Education was established through the Education Decree o s the Superior Commission of Primary 
            Instruction under a Chairman. The Education agency underwent many reorganization efforts in the 20th century in order  to better define its purpose vis a vis the changing administrations and charters. The present day Department of Education was eventually mandated through Republic Act 9155, otherwise known as the Governance of Basic Education act of 2001 which 
            establishes the mandate of this agency.
            <br><br>
            The Department of Education (DepEd) formulates, implements, and coordinates policies, plans, programs and projects in the areas of formal and non-formal basic education. It supervises all elementary and secondary education institutions, including 
            alternative learning systems, both public and private; and provides for the establishment and maintenance of a complete, 
            adequate, and integrated system of basic education relevant to the goals of national development.
        </p>
    </div>
</section>
</template>

<style>
img.visionMissionImage {
    width: 100%;
    display: block;
}

.visionMission {
    padding: 3% 3%;
    display: flex;
}

img.logoDeped {
    display: block;
    width: 150px;
    margin: 2% auto 0;
}

.visionMission h5 {
    text-align: center;
    color: #404040;
    font-size: 28px;
    margin-bottom: 5%;
}

.vision, .mission {
    width: 50%;
    border: 3px solid #329bd6;
    padding: 2% 3% 5%;
    margin: 0 30px;
    border-radius: 50px;
}

.coreValues {
    padding-top: 2%;
    width: 80%;
    display: block;
    margin: 0 auto;
}

.cvContent {
    display: flex;
    justify-content: space-around;
}

.cvContent img {
    height: 90px; 
    display: block; 
    margin: 0 auto;
}

.coreValues h5,.mandate h5 {
    font-size: 28px;
    color: #404040;
    text-align: center;
    margin-bottom: 2%;
}

.coreValues p {
    text-align: center;
    padding-top: 15px;
    font-size: 20px;
}

.mandate p {
    font-size: 16px;
}

.mandate {
    padding: 4% 8% 8%;
    background: #e6e6e6;
    margin-top: 6%;
    display: block;
}
</style>