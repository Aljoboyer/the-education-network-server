const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: false },
  phone: { type: Number, required: false },
  role: { type: String },
  city: { type: String },
  profileImg: { type: mongoose.Mixed, required: false },
  qualification: { type: String },
  address: { type: String },
  socialLink: { type: String },
  country: {type: String}
})

module.exports = mongoose.model('User', userSchema)
