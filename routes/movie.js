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
        ratelist: req.body.ratelist,
        likes: req.body.likes,
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
    Movie.addcomment(req.body.comment,req.body.dramaID,(err) => {
        if(err){
            res.json({success: false, msg: 'Faild to add comment'+err});      
        }else{
            res.json({success: true, msg: 'comment added'}); 
        }
    });
});

//add to RateList
router.post('/addrating',(req,res, next) => {
    console.log(req.body.ratelist);
    Movie.addRating(req.body.ratelist,req.body.dramaID,(err) => {
        if(err){
            res.json({success: false, msg: 'Faild to add rating'+err});      
        }else{
            res.json({success: true, msg: 'rating added'}); 
        }
    });
});

//update RateList
router.put('/updaterate',(req,res, next) => {
    Movie.updateRatingList(req.body.ratelist,req.body.dramaID,(err) => {
        if(err){
            res.json({success: false, msg: 'Faild to update rating List'+err});      
        }else{
            res.json({success: true, msg: 'rating List updated'}); 
            
        }
    });
});

//update Rating
router.put('/updaterating',(req,res, next) => {
    console.log("adf"); 
    Movie.updateRating(req.body.rating,req.body.dramaID,(err) => {
        if(err){
            res.json({success: false, msg: 'Faild to update rating'+err});     
        }else{
            res.json({success: true, msg: 'rating updated'});
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



//Get movie by channel
router.get('/channel/:name', (req,res,next) => {
    Movie.getMovieByChannel(req.params.name,(err,movies) =>{
        if(err){
            res.send(err);
        }
            res.json(movies);
    })
})

//Get movie by catagory
router.get('/catagory/:cat', (req,res,next) => {
    Movie.getMovieByCatagory(req.params.cat,(err,movies) =>{
        if(err){
            res.send(err);
        }
            res.json(movies);
    })
})

//get All getPopular
router.get('/getpopular', (req, res, next) => {
    Movie.getPopular((err,movies) =>{
        res.json(movies);
    });
});

//get All getToprated
router.get('/toprated', (req, res, next) => {
    Movie.getToprate((err,movies) =>{
        res.json(movies);
    });
});

module.exports = router;