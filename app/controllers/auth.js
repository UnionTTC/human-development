var express = require('express')
var passport = require('passport')
var mongoose = require('mongoose')
var Account = mongoose.model('User')
var router = express.Router()
module.exports = function (app) {
  app.use('/auth', router)
}

router.route('/login')
  .get(function (req, res, next) {
    res.render('auth/login', { user: req.user })
  })
  .post(passport.authenticate('local'), function (req, res) {
    res.redirect('/')
  })

router.route('/logout')
  .get(function (req, res, next) {
    req.logout()
    res.redirect('/auth/login')
  })
