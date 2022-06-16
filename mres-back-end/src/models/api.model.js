'use strict'

require('dotenv').config()

let dbconnect = require('../../config/database.config');
const { post } = require('../routes/api.route');

function getDateTime() {
    let now     = new Date(); 
    let year    = now.getFullYear();
    let month   = now.getMonth()+1; 
    let day     = now.getDate();
    let hour    = now.getHours();
    let minute  = now.getMinutes();
    let second  = now.getSeconds(); 
    if(month.toString().length == 1) {
         month = '0'+month;
    }
    if(day.toString().length == 1) {
         day = '0'+day;
    }   
    if(hour.toString().length == 1) {
         hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
         minute = '0'+minute;
    }
    if(second.toString().length == 1) {
         second = '0'+second;
    }   
    let dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;   
     return dateTime;
}

class mresQuery{
    static postCount = 8

    // Create ADMIN account
    static createAdmin(userName, passWord, result){
        dbconnect.query('INSERT INTO admin (id, userName,passWord) VALUES (?,?,?)', ['', userName, passWord],(err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    // Login admin verification
    static loginAdmin(userName, result){
        dbconnect.query('SELECT * FROM admin WHERE userName=?',[userName], (err,res)=>{
            if(res.length === 0){
                result(null, err)
            }else{
                result(null, res)
            }
            
        })
    }

    // Fetching data from database
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
        dbconnect.query('SELECT * FROM schoolactivities ORDER BY createdAt DESC', (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static getByIdSA(id,result){
        dbconnect.query('SELECT * FROM schoolactivities WHERE id=?', [id], (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static async getByPageSA(page, result){
        const startRow = +page === 1 ? 0 : (page - 1) * this.postCount
        dbconnect.query('SELECT * FROM schoolactivities ORDER BY createdAt DESC LIMIT ?, ?', [startRow, this.postCount], (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static getAllAnnouncements(result){
        dbconnect.query('SELECT * FROM announcements ORDER BY createdAt DESC', (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static getByIdAnnouncements(id, result){
        dbconnect.query('SELECT * FROM announcements WHERE id=?', [id], (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static async getByPageAnnouncements(page, result){
        const startRow = +page === 1 ? 0 : (page - 1)  * this.postCount
        dbconnect.query('SELECT * FROM announcements LIMIT ?, ?', [startRow, this.postCount], (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static getAllLCP(result){
        dbconnect.query('SELECT * FROM lcp ORDER BY page ASC', (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    // Uploading file and data
    static addFacultyMember(coverPhoto, TPGL, prefix, firstName, middleInitial, lastName, category, position, result){
        dbconnect.query('INSERT INTO faculty (coverPhoto, teacherPerGradeLevel, prefix, firstName, middleInitial, lastName, category, position) VALUES (?,?,?,?,?,?,?,?)', [coverPhoto, TPGL, prefix, firstName, middleInitial, lastName, category, position], (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static scheduleUpload(title, description, location, date, time, result){
        dbconnect.query('INSERT INTO schedules (title, description, location, date, time) VALUES (?,?,?,?,?)', [title, description, location, date, time], (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }
    static schoolActivitiesUpload(coverPhoto, title, description, author, result){
        dbconnect.query('INSERT INTO schoolactivities (id, coverPhoto, title, description, author, createdAt) VALUES (?,?,?,?,?,?)', ['', coverPhoto, title, description, author, getDateTime()], (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static announcementsUpload(coverPhoto, title, description, author, result){
        dbconnect.query('INSERT INTO announcements (id, coverPhoto, title, description, author, createdAt) VALUES (?,?,?,?,?,?)', ['', coverPhoto, title, description, author, getDateTime()], (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static LCPUpload(coverPhoto, page, result){
        dbconnect.query('INSERT INTO lcp (id, coverPhoto, page) VALUES (?,?,?)', ['', coverPhoto, page], (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    // Deleting DATA's
    static deleteSchedule(result){
        dbconnect.query('DELETE FROM schedules WHERE schedulenote != "undefined"', (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static removeFacultyById(id, result){
        dbconnect.query('DELETE FROM faculty WHERE id=?', [id],(err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static removeSAById(id, result){
        dbconnect.query('DELETE FROM schoolactivities WHERE id=?', [id],(err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static removeAnnouncementsById(id, result){
        dbconnect.query('DELETE FROM announcements WHERE id=?', [id],(err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static removeLCPById(id, result){
        dbconnect.query('DELETE FROM lcp WHERE id=?', [id],(err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    // UPDATING DATA's
    static updateSchedule(schedule, result){
        dbconnect.query('UPDATE schedules SET schedulenote=? WHERE id > 0', [schedule], (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }
    static updateSA(image,title,description,author,id, result){
        dbconnect.query('UPDATE schoolactivities SET coverPhoto=?, title=?, description=?, author=? WHERE id=?', [image,title,description,author,id],(err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static updateAnnouncements(image,title,description, author, id, result){
        dbconnect.query('UPDATE announcements SET coverPhoto=?, title=?, description=?, author=? WHERE id=?', [image,title,description,author,id],(err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }
    
    static updateLCP(image, page, id, result){
        dbconnect.query('UPDATE lcp SET coverPhoto=?, page=? WHERE id=?', [image,page,id],(err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    static updateFaculty(coverPhoto ,TPGL, prefix, firstName, middleInitial, lastName, category, position, id,result){
        dbconnect.query('UPDATE faculty SET coverPhoto=?, teacherPerGradeLevel=?, prefix=?, firstName=?, middleInitial=?, lastName=?, category=?, position=? WHERE id=?', [ coverPhoto, TPGL, prefix, firstName, middleInitial, lastName, category, position, id], (err,res)=>{
            if(err){
                result(null, err)
            }else{
                result(null, res)
            }
        })
    }

    // OTHERS
    static async getLCPPageByID(id){
        const res = await dbconnect.promise().query('SELECT page FROM lcp WHERE id=?', [id])
        return res[0][0].page
    }

    static async adjustLCPPageNumbers(targetID){
        const targetPage = await this.getLCPPageByID(targetID)
        await dbconnect.promise().query('UPDATE lcp SET page=page-1 WHERE page > ? ', [targetPage])
    }

    static async getTableLength(tableName){
        const res = await dbconnect.promise().query('SELECT COUNT(*) FROM '+ tableName)

        const tbLength = res[0][0]['COUNT(*)']

        let pageCount = tbLength%this.postCount === 0 
            ? tbLength/this.postCount
            : Math.floor(tbLength/this.postCount) + 1


        return pageCount
    }

}

module.exports = mresQuery