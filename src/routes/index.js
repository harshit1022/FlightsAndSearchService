const express = require('express');
const router = express.Router();

const v1ApiRoutes = require('./v1/index'); // here we are just importing function from other file

router.use('/v1', v1ApiRoutes); // this is main thing

module.exports = router;