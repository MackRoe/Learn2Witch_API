const express = require('express')

const Course = require('../models/courses.js')

const router = express.Router(); // eslint-disable-line new-cap

// GET /api/course
router.get('/about', (req, res) => {
    res.send({ message: 'Learning is FUN!!!'})
  })

// GET list of courses
router.get('/', (req, res) => {
    Course.find().then(result => {
        res.json(result);
    })
})

// GET specific course
router.get('/:id', (req, res) => {
    Course.findOne({_id: req.params.id}).then(result => {
        res.json(result);
    })
})

// POST new course
router.post('/', (req,res) => {
    const course = new Course(req.body)
    course.save().then(result => {
        res.json(result)
    })
})

// TODO: more routes?

module.exports = router;
