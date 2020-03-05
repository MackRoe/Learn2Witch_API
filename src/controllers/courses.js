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
}) // WORKS

// GET specific course
router.get('/:id', (req, res) => {
    Course.findOne({_id: req.params.id}).then(result => {
        res.json(result);
    })
})  // WORKS

// POST new course
router.post('/', (req,res) => {
    console.log('-----')
    console.log(req.user)
    if (req.user == null){
        res.json({message: 'must be logged in'})
    } else {
        const course = new Course(req.body)
        course.save().then(result => {
            res.json(result)
        })
    }
})

// PUT endpoint
router.put('/:id', (req,res) => {

    Course.findByIdAndUpdate(req.params.id, req.body)
        .then(result => {
            res.json(result)
            console.log('Object Updated Successfully')
    })
}) // get again to see updated

// DELETE endpoint
router.delete('/:id', (req,res) => {

    Course.findByIdAndRemove(req.params.id).then(result => {
        res.json(result)
        console.log('Object Deleted Successfully')
    })
}) // get again to see updated

module.exports = router;
