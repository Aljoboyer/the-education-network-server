const mongoose = require('mongoose')

const CourseSchema = mongoose.Schema({
  courseTitle: { type: String, required: false },
  price: { type: String, required: false },
  totalVideo: { type: Number, required: false },
  category: { type: String },
  requirements: {type: String},
  courseImg: {
    type: mongoose.Mixed,
    required: false,
    },
  videos: {
    type: Array
  },
  chapterTitle: {
    type: Array
  }
})

module.exports = mongoose.model('Course', CourseSchema)