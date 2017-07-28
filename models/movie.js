const mongoose = require('mongoose');
const config = require('../config/database');
const User = require('../models/user');
const actor = require('../models/actor');

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
    coverPath:{
        type: String
    },
    rating:{
        type: String,
        required: true
    },
    ratelist:[{
        uID: String,
        rate: String
    }],
    likes:{
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
            type: mongoose.Schema.Types.String,
            ref: 'username'
        }
    }],
    crew:[{
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'actor'
        },
        role:{
            type: String
        }
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
        episodeURL: String,
        episodeDate: String,
        season: String
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

module.exports.addcomment = function(comment,dramaId,callback){
    Movie.findOneAndUpdate({_id: dramaId},{$push: {userComments: comment}},callback);
}

module.exports.addRating = function(rateList,dramaId,callback){
    console.log(rateList.rate+dramaId);
    Movie.findOneAndUpdate({_id: dramaId},{$push: {ratelist: rateList}},callback);
}

module.exports.updateRatingList = function(rate,dramaId,callback){
    Movie.update({_id: dramaId,'ratelist.uID':rate.uID},{$set:{'ratelist.$.rate': rate.rate}},callback);
}

module.exports.updateRating = function(rate,dramaId,callback){
    console.log(rate);
    Movie.update({_id: dramaId},{rating: rate},callback);
}

module.exports.getToprate = function(callback){
    Movie.find({rating:{$gte:8}},callback);
}

module.exports.getPopular = function(callback){
    Movie.find({},callback).sort({likes:-1}).limit(4);
}

module.exports.getMovieByChannel = function(channel, callback){
    Movie.find({tvChannel:channel},callback);
}

module.exports.getMovieByCatagory = function(catagory, callback){
    Movie.find({catagory:catagory},callback);
}

module.exports.search = function(catagory, callback){
    console.log(catagory);
    var searchPhrase = catagory;
    var regularExpression = new RegExp(".*" + searchPhrase + ".*");
    Movie.find({movieTitle: regularExpression},callback);
}


