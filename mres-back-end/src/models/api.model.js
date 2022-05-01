let dbconnect = require('../../config/database.config')

class mresQuery{

    static getSchedule(result){
        dbconnect.query('SELECT * FROM schedules', (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static getAllFaculty(result){
        dbconnect.query('SELECT * FROM faculty', (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static getAllSchoolActivities(result){
        dbconnect.query('SELECT * FROM schoolactivities', (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static getAllAnnouncements(result){
        dbconnect.query('SELECT * FROM announcements', (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static getAllLCP(result){
        dbconnect.query('SELECT * FROM lcp', (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    // Uploading file and data
    static scheduleUpload(schedule, result){
        dbconnect.query('INSERT INTO schedules (schedulenote) VALUES (?)', [schedule], (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static addFacultyMember(coverPhoto ,TPGL, prefix, firstName, middleInitial, lastName, position, result){
        dbconnect.query('INSERT INTO faculty (id, coverPhoto, teacherPerGradeLevel, prefix, firstName, middleInitial, lastName, position) VALUES (?,?,?,?,?,?,?,?)', ['', coverPhoto, TPGL, prefix, firstName, middleInitial, lastName, position], (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static schoolActivitiesUpload(coverPhoto, title, description, result){
        dbconnect.query('INSERT INTO schoolactivities (id, coverPhoto, title, description) VALUES (?,?,?,?)', ['', coverPhoto, title, description], (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static announcementsUpload(coverPhoto, title, description, result){
        dbconnect.query('INSERT INTO announcements (id, coverPhoto, title, description) VALUES (?,?,?,?)', ['', coverPhoto, title, description], (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static LCPUpload(coverPhoto, result){
        dbconnect.query('INSERT INTO lcp (id, coverPhoto) VALUES (?,?)', ['', coverPhoto], (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }
}

module.exports = mresQuery