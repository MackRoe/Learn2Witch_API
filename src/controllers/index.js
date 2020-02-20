const express = require('express');
const courseRoutes = require('./courses.js');
const authRoutes = require('./auth.js');

const router = express.Router(); // eslint-disable-line new-cap




router.use('/course', courseRoutes);

router.use('/auth', authRoutes);

module.exports = router;
