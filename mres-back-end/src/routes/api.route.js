const express = require('express')
const multer = require('multer')
const router = express.Router()
const apiController = require('../controllers/api.controller')

// multer setup for file uploading
const upload = multer({storage:multer.memoryStorage()})

// GET routers for static page
router.get('/', apiController.getSchedule)
router.get('/Faculty', apiController.getAllFaculty)
router.get('/SchoolActivites', apiController.getAllSchoolActivities)
router.get('/SchoolActivites/:id', apiController.getByIdSA)
router.get('/Announcements', apiController.getAllSchoolAnnouncements)
router.get('/Announcements/:id', apiController.getByIdAnnouncements)
router.get('/LearningContinuityPlan', apiController.getAllLCP)

// ADMIN POST routers
router.post('/Schedule/Upload', apiController.scheduleUpload)
router.post('/Faculty/AddFacultyMember', upload.single('coverPhoto'),apiController.addFacultyMember)
router.post('/SchoolActivities/Upload', upload.single('coverPhoto'),apiController.schoolActivitiesUpload)
router.post('/Announcements/Upload', upload.single('coverPhoto'), apiController.announcementsUpload)
router.post('/LearningContinuityPlan/Upload', upload.single('coverPhoto'), apiController.LCPUpload)

module.exports = router