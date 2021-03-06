var express = require('express')
var glob = require('glob')

var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var compress = require('compression')
var methodOverride = require('method-override')

var mongoose = require('mongoose')
var session = require('express-session')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var MongoStore = require('connect-mongo')(session)

module.exports = function (app, config) {
  var env = process.env.NODE_ENV || 'development'
  app.locals.ENV = env
  app.locals.ENV_DEVELOPMENT = env == 'development'

  app.set('views', config.root + '/app/views')
  app.set('view engine', 'jade')

  // app.use(favicon(config.root + '/public/img/favicon.ico'))
  app.use(logger('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }))
  // app.use(cookieParser())
  app.use(compress())
  app.use(express.static(config.root + '/public'))
  app.use(methodOverride())

  app.use(session({
    cookie: {maxAge: 1000 * 60 * 120},
    secret: '3kx9cmdcm43123mvcwkd0493ck3985',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  }))

  app.use(passport.initialize())
  app.use(passport.session())

  var controllers = glob.sync(config.root + '/app/controllers/*.js')
  controllers.forEach(function (controller) {
    require(controller)(app)
  })

  var Account = mongoose.model('User')
  passport.use(new LocalStrategy(Account.authenticate()))
  passport.serializeUser(Account.serializeUser())
  passport.deserializeUser(Account.deserializeUser())

  app.use(function (req, res, next) {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
  })

  if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
      res.status(err.status || 500)
      res.render('error', {
        message: err.message,
        error: err,
        title: 'error',
        user: req.user
      })
    })
  }

  app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: {},
      title: 'error',
      user: req.user
    })
  })

}
