var mongoose = require('mongoose')
var Schema = mongoose.Schema
var passportLocalMongoose = require('passport-local-mongoose')

var userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String },
  role: { type: String, required: true }
})

userSchema.plugin(passportLocalMongoose)

mongoose.model('User', userSchema)
