const express = require('express'); 
const router = express.Router();
const Channel = require('../models/channel');
const config = require('../config/database');

router.post('/addChannel',(req,res,next) => {
    let newChannel = new Channel({
        name: req.body.name,
        logoUrl: req.body.logoUrl,
        coverUrl: req.body.coverUrl,
        rating: req.body.rating,
        Description: req.body.Description,
        Shedule: req.body.Shedule,
        dramas: req.body.dramas
    });

    Channel.addChannel(newChannel,(err) => {
        if(err){
            res.json({success: false, msg:'Fail'+err})
        }else{
            res.json({success:true,msg:'success'})
        }
    });
});

router.get('/findchannel/:name',(req,res,next) => {
    Channel.getChannel(req.params.name,(err,channel) => {
        if(err){
            res.json(err)
        }else{
            res.json(channel)
        }
    })
})

module.exports = router;