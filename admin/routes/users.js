/**
 * Created by delus on 4/9/2017.
 */
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
//bring the model to the function
const User = require('../models/user');

//Register
router.post('/register', (req, res, next) => {
  let: newUser = new User({
    name: req.body.name,
    email: req.body.email,
    regno: req.body.regno,
    telephone: req.body.telephone,
    website: req.body.website,
    youtube_channel: req.body.youtube_channel,
    logo: req.body.logo,
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
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg : 'Error | User not fountd'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(user, config.secret,{
          expiresIn: 604800
        });
        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            regno: user.regno,
            telephone: user.telephone,
            website: user.website,
            youtube_channel: user.youtube_channel,
            logo: user.logo,
            username: user.username

          }
        });
      }else{
        return res.json({success: false, msg : 'Error | Wrong Password'});
      }
    });
});
});

//Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

module.exports = router;
