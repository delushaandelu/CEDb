const express = require('express');
const router = express('routes');
const actor = require('../models/actor');

router.post('/addActor',(req,res,next)=>{
    let newActor = actor({
        name: req.body.name,
        roles: req.body.roles,
        biography: req.body.biography,
        Awards: req.body.Awards,
        Filmograpghy: req.body.Filmograpghy,
        Photos: req.body.photos,
        imagePath: req.body.imagePath
    })

    actor.addActor(newActor,(err)=>{
        if(err){
            res.json({success: false, msg: 'fails to add actor'+err})
        }else{
            res.json({success: true,msg: 'actor added'})
        }
    })
})

router.get('/getactor/:id',(req,res,next)=>{
    actor.getActor(req.params.id,(err,actor)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(actor);
        }
    })
})

module.exports = router;