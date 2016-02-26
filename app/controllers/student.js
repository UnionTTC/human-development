var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var auth = require('../../config/auth')
var Student = mongoose.model('Student')

module.exports = function (app) {
  app.use('/student', router)
}

router.use(auth.isLoggedIn)

router.route('/')
  .get(function (req, res, next) {
    Student.find({})
      .sort({LastName: 1})
      .exec()
      .then(function (students) {
        res.render('student/index', {
          title: 'Students',
          students: students,
          user: req.user
        })
      })
  })

router.route('/edit')
  .get(function (req, res, next) {
    Student.findOne({_id: req.query.id})
      .exec()
      .then(function (student) {
        res.render('student/edit', {
          title: 'Edit',
          student: student,
          user: req.user
        })
      })
  })

router.route('/add')
  .post(function (req, res, next) {
    var newStudent = new Student({ FirstName: 'Colby', LastName: 'Rodeheaver', UCID: 12345, Major: 'Elementary' })
    newStudent.save()
      .then(function (v) {
        res.redirect('/student')
      })
      .catch(function (err) {
        next(err)
      })
  })

router.route('/delete')
  .post(function (req, res, next) {
    Student.remove({
      _id: req.body.id
    })
      .then(function (student) {
        res.redirect('/student')
      })
      .catch(function (err) {
        next(err)
      })
  })
