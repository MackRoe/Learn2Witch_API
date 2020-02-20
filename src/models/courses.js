const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  course_name: { type: String, required: true },
  lesson_name: { type: String },
  course_author: { type: String },
  lesson_content: { type: String },
  lesson_url: { type: String }

})

Course = mongoose.model('Course', CourseSchema);

module.exports = Course;
