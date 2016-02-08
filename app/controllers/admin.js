var express = require('express')
// var passport = require('passport')
var mongoose = require('mongoose')
var Account = mongoose.model('User')
var auth = require('../../config/auth')
var router = express.Router()

module.exports = function (app) {
  Account.findOne({username: 'admin'})
    .exec()
    .then(function (result) {
      if (result === null) {
        Account.register(new Account({ username: 'admin', role: 'admin' }), 'password', function (err, account) {
          if (err) {
            console.log(err)
          } else {
            console.log('admin created with default password')
          }
        })
      }
    })
  app.use('/admin', router)
}

router.use(auth.isAdmin)

router.route('/')
  .get(function (req, res, next) {
    Account.find()
      .exec()
      .then(function (users) {
        res.render('admin/index', { title: 'Admin Panel', user: req.user, users: users })
      })
  })

router.route('/create')
  .get(function (req, res, next) {
    res.render('admin/create', { title: 'Create User', user: req.user })
  })
  .post(function (req, res, next) {
    Account.register(new Account({ username: req.body.inputUsername, role: req.body.inputRole }), req.body.inputPassword, function (err, account) {
      if (err) {
        return next(err)
      }
      res.redirect('/admin')
    })
  })

router.route('/update')
  .get(function (req, res, next) {
    Account.findOne({ _id: req.query.id })
      .exec()
      .then(function (user) {
        res.render('admin/update', { title: 'Edit', changeUser: user, user: req.user })
      })
      .catch(function (err) {
        next(err)
      })
  })
  .post(function (req, res, next) {
    Account.update({ _id: req.body.id }, { username: req.body.inputUsername, role: req.body.inputRole }, {})
      .exec()
      .then(function (result) {
        res.redirect('/admin')
      })
      .catch(function (err) {
        next(err)
      })
  })

router.route('/updatePassword')
  .get(function (req, res, next) {
    Account.findOne({ _id: req.query.id })
      .exec()
      .then(function (user) {
        res.render('admin/password', { title: 'Change Password', changeUser: user, user: req.user })
      })
      .catch(function (err) {
        next(err)
      })
  })
  .post(function (req, res, next) {
    Account.findOne({_id: req.body.id})
      .exec()
      .then(function (user) {
        user.setPassword(req.body.inputNewPassword, function (err, returnedUser, passwordErr) {
          if (err) {
            next(err)
          }
          user.save()
            .then(function (saved) {
              res.redirect('/admin')
            })
            .catch(function (err) {
              next(err)
            })
        })
      })
  })

router.route('/delete')
  .post(function (req, res, next) {
    Account.remove({_id: req.body.id})
      .exec()
      .then(function (result) {
        res.redirect('/admin')
      })
      .catch(function (err) {
        next(err)
      })
  })
