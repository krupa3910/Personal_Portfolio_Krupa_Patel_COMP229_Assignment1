var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET About Me page. */
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About Me'});
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});

/* GET Submit Contact Information page. */

router.get('/resume', function(req, res, next) {

  res.download('./public/images/resume-sample.pdf');

});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});

/* GET Contact Me page. */
router.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'Contact Me'});
});


/* GET Contact Me page. */
router.post('/submitContact', function(req, res, next) {
  console.log(req.body);
});
module.exports = router;
