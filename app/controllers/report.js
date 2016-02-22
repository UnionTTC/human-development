var express = require('express')
var router = express.Router()
// var mongoose = require('mongoose')
var auth = require('../../config/auth')

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
  res.render('report/template1', {
    title: 'Human Development',
    user: req.user
  })
})

router.get('/template2', function (req, res, next) {
  res.render('report/template2', {
    title: 'Human Development',
    user: req.user
  })
})

router.get('/template3', function (req, res, next) {
  res.render('report/template3', {
    title: 'Human Development',
    user: req.user
  })
})

router.get('/template4', function (req, res, next) {
  res.render('report/template4', {
    title: 'Human Development',
    user: req.user
  })
})
