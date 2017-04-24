const mongoose = require('mongoose');
const drama = require('./movie');

const actorScehma = mongoose.Schema({
    name:{
        type:String,
        requires: true
    },
    imagePath: {
        type: String
    },
    roles:[{
        type: String
    }],
    biography: [{
        gender: String,
        dob: String,
        description: String
    }],
    Awards: [{
        awardName: String,
        year: String,
        description: String
    }],
    Filmograpghy: [{
        Year: String,
        Role: String,
        Drama:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'drama'
        }

    }],
    Photos: [{
        type: String,
    }]

})

const actor = module.exports = mongoose.model('actor', actorScehma);

module.exports.addActor = function(newActor,callback){
    newActor.save(callback);
}

module.exports.getActor = function(id,callback){
    actor.findById(id,callback);
}