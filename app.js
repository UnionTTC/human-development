var express = require('express')
var config = require('./config/config')
var glob = require('glob')
var mongoose = require('mongoose')

mongoose.connect(config.db)

mongoose.Promise = global.Promise
var db = mongoose.connection
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db)
})

var models = glob.sync(config.root + '/app/models/*.js')
models.forEach(function (model) {
  require(model)
})
var app = express()

app.locals.sitename = 'Human Development'
if (app.get('env') === 'development') {
  app.locals.pretty = true
}

require('./config/express')(app, config)

app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port)
})

module.exports = app
