module.exports.isLoggedIn = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/auth/login')
}

module.exports.isAdmin = function (req, res, next) {
  if (req.isAuthenticated() && req.user.role === 'admin') {
    return next()
  } else if (req.user === undefined) {
    return res.redirect('/auth/login')
  }
  var err = new Error('unauthorized')
  err.status = 401
  return next(err)
}
