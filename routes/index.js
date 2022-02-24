
/* File Name-index.js, Student name- Patel Krupa Manilal, Student ID:301246257, Course code- COMP229*/

var express = require('express');
var mongoose = require("mongoose");
var passport = require("passport");
const bodyParser = require('body-parser');
var router = express.Router();

var businessContact = require("../model/contactModel");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home'});
});

/* GET About Me page. */
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About Me'});
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});


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


/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login'});
});


//Handling user login

router.post("/login", passport.authenticate("local", {
  failureRedirect: "/login"
  }), function (req, res) {
    res.send("businessPage");
});

router.get('/logout', (req, res) => {
  if (req.session) {
  req.session.destroy();
  res.clearCookie('session-id');
  res.redirect('/');
  }
  else {
  var err = new Error('You are not logged in!');
  err.status = 403;
  next(err);
  }
  });


  //*Api to get the content of bussiness contact page

router.get("/businessContact", isLoggedIn, function (req, res) {
  businessContact.find((err,contactList)=>{
  if(err){
  return console.error(err);
  }else{
  res.render("businessContact",{contactData : contactList})
  }
  });
  });

  function isLoggedIn(req, res, next) { 
    if (req.isAuthenticated()) return next();

    res.redirect("/login");
  }

  router.post('/edit', (req,res,next) => {
    let updatedContact = businessContact({
    "_id":req.body.id,
    "contactName":req.body.contactName,
    "contactNumber":req.body.contactNumber,
    "userEmail":req.body.userEmail
    });
    let id = req.body.id;
    businessContact.updateOne({_id:id },updatedContact,(err)=> {
    if(err){
    console.log(err);
    res.end(err);
    }else{
    res.redirect("/businessContact")
    }
    });
    });
    // DELETE USER
    router.get('/delete/:id', function(req, res, next) {
    let id=req.params.id;
    businessContact.remove({_id:id},(err)=>{
    if(err){
    console.log(err);
    res.end(err);
    }else{
    res.redirect("/businessContact");
    }
    });
    })
  

module.exports = router;


