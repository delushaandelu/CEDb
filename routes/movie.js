const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');
const config = require('../config/database');

router.post('/addmovie',(req,res,next) => {
    let newMovie = new Movie({
        movieTitle: req.body.movieTitle,
        tvChannel: req.body.tvChannel,
        startedYear: req.body.startedYear,
        showTime: req.body.showTime,
        status: req.body.status,
        imagePath: req.body.imagePath,
        coverPath: req.body.coverPath,
        rating: req.body.rating,
        catagory: req.body.catagory,
        overview: req.body.overview,
        trailerURL: req.body.trailerURL,
        userComments: req.body.userComments,
        crew: req.body.crew,
        numberOfSeasons: req.body.numberOfSeasons,
        numberOfEpisodes: req.body.numberOfEpisodes,
        episode: req.body.episode,
    });

    Movie.addMovie(newMovie,(err,movie) => {
        if(err){
            res.json({success: false, msg: 'Faild to add movie'+err});      
        }else{
            res.json({success: true, msg: 'movie added'}); 
        }
    });
});

router.post('/addcomment',(req,res, next) => {
    console.log(req);
    Movie.addcomment(req.body.comment,req.body.dramaID,(err) => {
        if(err){
            res.json({success: false, msg: 'Faild to add comment'+err});      
        }else{
            res.json({success: true, msg: 'comment added'}); 
        }
    });
});

//get All Movies
router.get('/getall', (req, res, next) => {
    Movie.getAll((err,movies) =>{
        res.json(movies);
    });
});

// Get Single Movie
router.get('/getmovie/:id', (req, res, next) => {
    Movie.getMovieById(req.params.id,(err,movie) => {
        if(err){
            res.send(err);
        }
        res.json(movie);
    });
});

module.exports = router;