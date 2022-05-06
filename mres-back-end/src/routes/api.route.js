'use strict'

const express = require('express')
const multer = require('multer')
const router = express.Router()
const apiController = require('../controllers/api.controller')

// multer setup for file uploading
const upload = multer({storage:multer.memoryStorage()})

// GET routers for static page
router.get('/', apiController.getSchedule)
router.get('/Faculty', apiController.getAllFaculty)
router.get('/SchoolActivities', apiController.getAllSchoolActivities)
router.get('/SchoolActivities/:id', apiController.getByIdSA)
router.get('/Announcements', apiController.getAllSchoolAnnouncements)
router.get('/Announcements/:id', apiController.getByIdAnnouncements)
router.get('/LearningContinuityPlan', apiController.getAllLCP)

// ADMIN POST Create routers
router.post('/Schedule/Upload', apiController.scheduleUpload)
router.post('/Faculty/AddFacultyMember', upload.single('coverPhoto'),apiController.addFacultyMember)
router.post('/SchoolActivities/Upload', upload.single('coverPhoto'),apiController.schoolActivitiesUpload)
router.post('/Announcements/Upload', upload.single('coverPhoto'), apiController.announcementsUpload)
router.post('/LearningContinuityPlan/Upload', upload.single('coverPhoto'), apiController.LCPUpload)

// ADMIN POST Update routers 


// ADMIN POST Delete routers 
router.delete('/Schedule/remove', apiController.deleteSchedule)
router.delete('/Faculty/remove/:id', apiController.removeFacultyById)
router.delete('/SchoolActivities/remove/:id', apiController.removeSAById)
router.delete('/Announcements/remove/:id', apiController.removeAnnouncementsById)
router.delete('/LearningContinuityPlan/remove/:id', apiController.removeLCPById)

module.exports = router