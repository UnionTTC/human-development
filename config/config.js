var path = require('path')
var rootPath = path.normalize(__dirname + '/..')
var env = process.env.NODE_ENV || 'development'

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'human-development'
    },
    port: 3000,
    db: 'mongodb://localhost/human-development-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'human-development'
    },
    port: 3000,
    db: 'mongodb://localhost/human-development-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'human-development'
    },
    port: 3000,
    db: 'mongodb://localhost/human-development-production'
  }
}

module.exports = config[env]
