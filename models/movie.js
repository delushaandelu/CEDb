const mongoose = require('mongoose');
const config = require('../config/database');
const User = require('../models/user');

//User Schema
const MovieSchema = mongoose.Schema({
    movieTitle:{
        type: String,
        required: true
    },
    tvChannel:{
        type: String,
        required: true
    },
    startedYear:{
        type: String
    },
    showTime:{
        type: String
    },
    status:{
        type: String
    },
    imagePath:{
        type: String
    },
    rating:{
        type: String,
        required: true
    },
    catagory:[{
        type: String
    }],
    overview:{
        type: String
    },
    trailerURL:{
        type: String,
    },
    userComments:[{
        text: String,
        date: String,
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
    Director:{
        type: String
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Crew'
    },
    mainActors:[{
        type: String
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Crew'
    }],
    numberOfSeasons:{
        type : String
    },
    numberOfEpisodes:{
        type : String
    },
    episode:[{
        episodeImagePath: String,
        episodeTitle: String,
        episodeOverview: String,
        episodeURL: String 
    }]
});

const Movie = module.exports = mongoose.model('Movie', MovieSchema);

module.exports.getMovieById = function(id, callback){
    Movie.findById(id,callback);
}

module.exports.getMovieByTitle  = function(title, callback){
    const query = {Title: title}
    Movie.findOne(query,callback);
}

module.exports.addMovie  = function(newMovie, callback){
    //newMovie.image.data = fs.readFileSync("/home/isurunath/Desktop/tele1.jpg");
    //newMovie.image.contentType = 'image/png';
    newMovie.save(callback);
}

module.exports.getAll  = function(callback){
    Movie.find({},callback);
}
