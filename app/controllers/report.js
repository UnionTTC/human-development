var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var auth = require('../../config/auth')
var Student = mongoose.model('Student')

module.exports = function (app) {
  app.use('/report', router)
}

router.use(auth.isLoggedIn)

router.get('/', function (req, res, next) {
  res.redirect('/')
/*
, {
  title: 'Human Development',
  user: req.user
})
*/
})

router.get('/template1', function (req, res, next) {
  Student.find({'Provisional.Autobiography': true,
    'Provisional.MyersBriggs': true,
    'Provisional.SpeechAndHearing': true,
    'Provisional.ProvisionalApplication': true,
    'Provisional.R1PastorOrDean': true,
    'Provisional.R2WorkSupervisor': true,
    'Provisional.R3Teacher': true
  // {'Provisional.EDUC125': 'A' || 'Provisional.EDUC125': 'B' || 'Provisional.EDUC125': 'C'}
  // {'Provisional.ObservationHours': ?},
  // {'GPA' => 2.75},
  },
    'FirstName LastName Major')
    .sort({LastName: 1})
    .exec()
    .then(function (students) {
      console.log(students)
      res.render('report/template1', {
        title: 'Human Development',
        students: students,
        user: req.user
      })
    })
})

router.get('/template2', function (req, res, next) {
  Student.find({'Candidacy.CandidancyApplication': true,
    // 'Candidacy.Educ218': '',
    // 'Candidacy.Educ225': '',
    // 'Candidacy.FelonyStatement': ?,
    // 'Candidacy.TCPApproval': ?,
    'Candidacy.CandidacyInterview': true,
    // 'Candidacy.Recommendation': ?,
    // 'Candidacy.COREReading': ?,
    // 'Candidacy.COREWriting': ?,
    // 'Candidacy.COREMathematics': ?,
    // 'GPA': >= 2.75,
    'Candidacy.SophmorePortfolio': true
  },
    'FirstName LastName Major')
    .sort({LastName: 1})
    .exec()
    .then(function (students) {
      res.render('report/template2', {
        title: 'Human Development',
        students: students,
        user: req.user
      })
    })
})

router.get('/template3', function (req, res, next) {
  Student.find({'PreTeaching.StudentTeachingAP': true,
    // 'PreTeaching.DateStudentTeaching': '',
    'PreTeaching.Recommendation': true,
    // 'PreTeaching.FelonyStatement': ?,
    'PreTeaching.BackgroundCheckAP': true,
    'PreTeaching.PhysicalTBTest': true,
    // 'GPA': >= 2.75,
    'PreTeaching.WorkRequest': true
  },
    'FirstName LastName Major')
    .sort({LastName: 1})
    .exec()
    .then(function (students) {
      res.render('report/template3', {
        title: 'Human Development',
        students: students,
        user: req.user
      })
    })
})

router.get('/template4', function (req, res, next) {
  Student.find({'Provisional.Autobiography': true})
    .sort({LastName: 1})
    .exec()
    .then(function (students) {
      res.render('report/template4', {
        title: 'Human Development',
        students: students,
        user: req.user
      })
    })
})
