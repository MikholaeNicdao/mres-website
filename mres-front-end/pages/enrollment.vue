<template>
    <section>
        <div id="enrollment" class="serviceDiv">
            <h3>Enrollment</h3>
            <div class="requirements" style="margin-bottom: 30px;">
                <h4 style="color: #329bd6;font-weight: normal;font-size: 20px;">Requirements</h4>
                <ul style="margin-left: 19px;margin-top: 5px;font-size: 14px;">
                    <li>Birth Certificate (1 original/CTC, 1 photocopy)</li>
                    <li>Learner School Form 9</li>
                    <li>Certificate of Transfer (if applicable)</li>
                    <li>Good moral character (for transferees)</li>
                </ul>
            </div>
            <table id="enrollmentTable" class="serviceTable">
                <tr class="tableTitle">
                    <th>Client Steps</th>
                    <th>Agent Action</th>
                    <th>Fees to be Paid</th>
                    <th>Processing Time</th>
                    <th>Person Responsible</th>
                </tr>
                <tr class="enrollmentSub">
                <th>Remote (Walk-in/Drop box)</th>
                <th></th><th></th><th></th><th></th>
                </tr>
                <tr>
                    <th>
                        1. Secure data form from drop boxes in strategic locations or from Teacher-In-Charge.
                        <br><br>
                        1.1. Fill-out form and return to drop box.
                    </th>
                    <th>
                        1. Receive, assess, and evaluate data form.
                        <br><br>
                        1.1. Schedule submission of required documents.
                        <br><br>
                        1.2. Inform parent/guardian of schedule via SMS of other means 
                    </th>
                    <th>None</th>
                    <th>20 munites</th>
                    <th>Teacher-In-Charge</th>
                </tr>
                <tr>
                    <th>
                        2. Submit requirements on schedule.
                        <br><br>
                        <u>Kinder</u>: 
                            <ul>
                                <li>PSA Birth Certificate</li>
                                <li>ECDC</li>
                            </ul>
                        <br>
                        <u>Grade 1 and Transferees</u>: 
                            <ul>
                                <li>Birth Certificate</li>
                                <li>Progress report card/Good Moral</li>
                            </ul>
                        <br>
                        <u>Grade 2 to 6</u>:
                            <ul>
                                <li>Report Card</li>
                            </ul>
                    </th>
                    <th>
                        2. Receive, assess, and evaluate Report Cards & Birth Certificate.
                        <br><br>
                        2.1. Provide LESF.
                    </th>
                    <th>None</th>
                    <th>10 minutes</th>
                    <th>Teacher-In-Charge</th>
                </tr>
                <tr>
                    <th>
                        3. Fill-up and submit LESF and submit.drop on designated drop boxes.
                    </th>
                    <th>
                        3. Retrieve, compile, and consolidate LESF.
                    </th>
                    <th>None</th>
                    <th>30 minutes</th>
                    <th>Teacher-In-Charge</th>
                    </tr>
                    <tr class="enrollmentSub">
                    <th>Online</th>
                    <th></th><th></th><th></th><th></th>
                </tr>
                <tr>
                    <th>1. Signify intent to enroll via online channels specified by the school.</th>
                    <th>1. Accept, record pupil's enrollment and schedule submission of requirements in the school or drop boxes.</th>
                    <th>None</th>
                    <th>5 minutes</th>
                    <th>Teacher-In-Charge</th>
                </tr>
                <tr>
                    <th>2. Submit document via drop boxes or online.</th>
                    <th>2. Retrieve, assess and evaluate submitted documents and provide link to online LESF.</th>
                    <th>None</th>
                    <th>10 minutes</th>
                    <th>Teacher-In-Charge</th>
                </tr>
                <tr>
                    <th>3. Fill-out and submit online LESF.</th>
                    <th>3. Retrieve and consolidate LESF responses</th>
                    <th>None</th>
                    <th>20 minutes</th>
                    <th>Teacher-In-Charge</th>
                </tr>
            </table>
        </div>
    </section>
</template>

<style>
#enrollmentTable th ul {
    margin-left: 30px;}

#enrollmentTable th u {
    text-decoration: underline;}

tr.enrollmentSub th {
    font-size: 14px;
    color: #CDC960;
    font-weight: 600;}

#enrollmentTable th ul {
    margin-left: 30px;}

#enrollmentTable th u {
    text-decoration: underline;}

.tableTitle th {
    text-align: center;
    color: #329bd6;
    font-size: 16px 
    !important;font-weight: normal;}

.serviceTable {
    margin-top: 35px;
    text-align: left;}

.serviceTable,
.serviceTable th,
.serviceTable tr {
    border: 1px solid silver;
    border-collapse: collapse;
    padding: 10px;}

.serviceTable {
    margin-top: 10px;}

.serviceDiv {
    padding: 3% 4%;
    width: 100%;}

.serviceDiv h3 {
    color: #404040;
    font-size: 25px;
    margin-bottom: 25px;}

.serviceDiv th {
    font-size: 14px;
    font-weight: 100;}
</style>