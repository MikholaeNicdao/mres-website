const apiModel = require('../models/api.model')

exports.getSchedule = (req,res)=>{
    apiModel.getSchedule((err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}

exports.getAllFaculty = (req,res)=>{
    apiModel.getAllFaculty((err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}

exports.getAllSchoolActivities = (req,res)=>{
    apiModel.getAllSchoolActivities((err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}

exports.getAllSchoolAnnouncements = (req,res)=>{
    apiModel.getAllAnnouncements((err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}

exports.getAllLCP = (req,res)=>{
    apiModel.getAllLCP((err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}

// Sending Data and File Uploading
exports.scheduleUpload = (req,res)=>{
    scheduleData = req.body.schedule

    apiModel.scheduleUpload(scheduleData, (err,result)=>{
        if(err){
            res.status(404).json({success: false, description: result})
        }else{
            res.status(200).json({success: true, description: result})
        }
    })
}

exports.addFacultyMember = (req,res)=>{
    image = req.file.buffer.toString('base64')
    teacherPerGradeLevel = req.body.teacherPerGradeLevel
    prefix = req.body.prefix
    firstName = req.body.firstName
    middleInitial = req.body.middleInitial
    lastName = req.body.lastName
    position = req.body.position

    apiModel.addFacultyMember(image,teacherPerGradeLevel,prefix, firstName, middleInitial, lastName, position, (err,result)=>{
        if(err){
            res.status(404).json({success: false, description: result})
        }else{
            res.status(200).json({success: true, description: result})
        }
    })
}

exports.schoolActivitiesUpload = (req,res)=>{
    image = req.file.buffer.toString('base64')
    title = req.body.title
    description = req.body.description

    apiModel.schoolActivitiesUpload(image,title,description,(err,result)=>{
        if(err){
            res.status(404).json({success: false, description: result})
        }else{
            res.status(200).json({success: true, description: result})
        }
    })
}

exports.announcementsUpload = (req,res)=>{
    image = req.file.buffer.toString('base64')
    title = req.body.title
    description = req.body.description

    apiModel.announcementsUpload(image,title,description,(err,result)=>{
        if(err){
            res.status(404).json({success: false, description: result})
        }else{
            res.status(200).json({success: true, description: result})
        }
    })
}

exports.LCPUpload = (req,res)=>{
    image = req.file.buffer.toString('base64')

    apiModel.LCPUpload(image,(err,result)=>{
        if(err){
            res.status(404).json({success: false, description: result})
        }else{
            res.status(200).json({success: true, description: result})
        }
    })
}