<template>
  <section class="admin">
    <div class="facultyAdmin">
        <div class="facultyHeaderContainer" id="">
            <h3>Organization List</h3>
            <div>
                <a href="editFaculty.html"><img src="images/editBlue.png">Edit</a>
                <div class="searchBar">
                    <form action="" method="post">
                        <input type="text" name="search" id="search">
                        <button type="submit"><img src="images/searchBtn.png"></button>
                    </form>
                </div>
            </div>
        </div>

        <div class="facultyContainer" id="adminDivisionOfficers">
            <h4>School Division Officers</h4>
            <div class="facultySubContainer">
                <div class="adminFacultyMember">
                    <img src="faculty/leonardoZapanta.png" class="adminFacultyImage">
                    <div class="adminFacultyInfo">
                        <p class="adminFacultyName">Leonardo D. Zapanta, EdD CESO </p>
                        <p class="adminFacultyPosition">Schools Division Superintendent</p>
                    </div>
                </div>
                <div class="adminFacultyMember">
                    <img src="faculty/leonardoZapanta.png" class="adminFacultyImage">
                    <div class="adminFacultyInfo">
                        <p class="adminFacultyName">Leonardo D. Zapanta, EdD CESO </p>
                        <p class="adminFacultyPosition">Schools Division Superintendent</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="facultyContainer" id="adminNonTeachingStaff">
            <h4>Non-Teaching Staff</h4>
            <div class="facultySubContainer">
                <div class="adminFacultyMember">
                    <img src="faculty/leonardoZapanta.png" class="adminFacultyImage">
                    <div class="adminFacultyInfo">
                        <p class="adminFacultyName">Leonardo D. Zapanta, EdD CESO </p>
                        <p class="adminFacultyPosition">Schools Division Superintendent</p>
                    </div>
                </div>
                <div class="adminFacultyMember">
                    <img src="faculty/leonardoZapanta.png" class="adminFacultyImage">
                    <div class="adminFacultyInfo">
                        <p class="adminFacultyName">Leonardo D. Zapanta, EdD CESO </p>
                        <p class="adminFacultyPosition">Schools Division Superintendent</p>
                    </div>
                </div>
            </div>
        </div> 

        <div class="facultyContainer" id="adminTeachingStaff">
            <h4>Teaching Staff</h4>
            <div class="facultySubContainer">
                <div class="adminFacultyMember">
                    <img src="faculty/leonardoZapanta.png" class="adminFacultyImage">
                    <div class="adminFacultyInfo">
                        <p class="adminFacultyName">Leonardo D. Zapanta, EdD CESO </p>
                        <p class="adminFacultyPosition">Schools Division Superintendent</p>
                    </div>
                </div>
                <div class="adminFacultyMember">
                    <img src="faculty/leonardoZapanta.png" class="adminFacultyImage">
                    <div class="adminFacultyInfo">
                        <p class="adminFacultyName">Leonardo D. Zapanta, EdD CESO </p>
                        <p class="adminFacultyPosition">Schools Division Superintendent</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="facultyContainer" id="adminSupportStaff">
            <h4>Support Staff</h4>
            <div class="facultySubContainer">
                <div class="adminFacultyMember">
                    <img src="faculty/leonardoZapanta.png" class="adminFacultyImage">
                    <div class="adminFacultyInfo">
                        <p class="adminFacultyName">Leonardo D. Zapanta, EdD CESO </p>
                        <p class="adminFacultyPosition">Schools Division Superintendent</p>
                    </div>
                </div>
                <div class="adminFacultyMember">
                    <img src="faculty/leonardoZapanta.png" class="adminFacultyImage">
                    <div class="adminFacultyInfo">
                        <p class="adminFacultyName">Leonardo D. Zapanta, EdD CESO </p>
                        <p class="adminFacultyPosition">Schools Division Superintendent</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
</template>

<script>
export default {

}
</script>

<style>
h4 {
    color: #404040; 
    font-size: 18px;}

.facultyAdmin {
    width: 100%;
    padding: 3% 4%;}

.facultyHeader h3 {
    font-size: 30px;
    color: #404040;
    width: 300px;
    text-align: center;}

.facultyHeader div {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    margin-left: 28px;}

.facultyHeader a {
    padding-bottom: 3px;
    padding-left: 10px;
    font-size: 19px;
    color: #329bd6;}

.facultyHeader a:hover {
    color: #1d6995;}

.facultyHeader a img {
    width: 17px;
    margin-right: 3px;}
</style>