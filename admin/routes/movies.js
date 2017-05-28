/**
 * Created by delus on 5/27/2017.
 */
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
//bring the model to the function
const Movie = require('../models/movie');

//Add new drama
router.post('/addmovie',(req, res, next)=>{
  const newMovie = Movie({
    movieTitle: req.body.movieTitle,
    tvChannel: req.body.tvChannel,
    startedYear: req.body.startedYear,
    showTime: req.body.showTime,
    status: req.body.status,
    imagePath: req.body.imagePath,
    rating: req.body.rating,
    likes: req.body.likes,
    overview: req.body.overview,
    category: req.body.category,
    trailerURL: req.body.trailerURL,
    Director: req.body.Director,
    numberOfSeasons: req.body.numberOfSeasons,
    numberOfEpisodes: req.body.numberOfEpisodes,
    passCode: req.body.passCode
  });

  Movie.addMovie(newMovie,(err,movies )=>{
    if(err){
      res.json({success: false, msg:'Failed to add new Drama!'});
    }else{
      res.json({success: true, msg:'Successfully new Drama added!'});
    }
  });

});

//display all the dramas
router.get('/viewdrama',(req, res, next)=>{
  Movie.find(function (err, movie) {
    res.json(movie);
});
});

//view all the information of the drama
router.get('/infodrama/:id', (req , res, next)=>{
  Movie.find(function (err, movie) {
    res.json(movie);
})
});

//delete a drama
router.delete('/movieremove/:id',(req, res, next)=>{
  Movie.remove({_id: req.params.id}, function (err, result) {
    if(err){
      res.json(err);
    }else{
      res.json(result);
    }
});
});
module.exports = router;
