
/* File Name-user.js, Student name- Patel Krupa Manilal, Student ID:301246257, Course code- COMP229*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
