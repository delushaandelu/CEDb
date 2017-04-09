/**
 * Created by delus on 4/9/2017.
 */
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

//bring the model to the function
const User = require('../models/user');

//Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    regno: req.body.regno,
    telephone: req.body.telephone,
    website: req.body.website,
    youtube_channel: req.body.youtube_channel,
    username: req.body.username,
    password: req.body.password
  });
  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed | Failed to Register User'});
    } else {
      res.json({success: true, msg:'Success | User Registered'});
    }
  });
});

//Authenticate
router.post('/authenticate', (req, res, next) => {
  res.send('Authenticate');
});

//Profile
router.get('/profile', (req, res, next) => {
  res.send('profile');
});

module.exports = router;
