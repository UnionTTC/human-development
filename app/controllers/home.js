var express = require('express')
var router = express.Router()
// var mongoose = require('mongoose')
var auth = require('../../config/auth')

module.exports = function (app) {
  app.use('/', router)
}

router.use(auth.isLoggedIn)

router.get('/', function (req, res, next) {
  res.render('home/index', {
    title: 'Human Development',
    user: req.user
  })
})
