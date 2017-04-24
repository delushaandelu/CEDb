const mongoose = require ('mongoose');
const config = require ('../config/database');
const movie = require ('./movie');

const channelSchema = mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    logoUrl: {
        type: String,
        required: true
    },
    coverUrl: {
        type: String,
    },
    rating: {
        type: String,
    },
    Description: {
        type: String
    },
    Shedule:[{
        name: String,
        time: String
    }],
    dramas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'movie'
    }]
})

const Channel = module.exports = mongoose.model('Channel',channelSchema);

module.exports.addChannel = function(newChannel, callback){
    newChannel.save(callback);
}

module.exports.getChannel = function(cname,callback){
    Channel.findOne({'name': cname},callback);
}