const express = require('express');

const User = require('../models/user.model');

const uploads = require('../middlewares/fileuploads')

const router = express.Router();

router.get("", async(req, res) =>{
    try{
      const users = await User.find().lean().exec();

      return res.status(200).send(users)

    }catch(err){
        return res.status(500).send({message: err.message})
    }
});

router.post("",uploads.single("avatar"), async(req, res) =>{
    try{
        const user = await User.create(req.files);;

        return res.status(201).send({user: user});
    }catch(err){
        res.status(500).send({message: err.message})
    }
})


router.get("/:id", async(req, res) =>{
    try{
        const user = await User.findById(req.params.id).lean().exec();

        return res.status(201).send({user: user});
    }catch(err){
        res.status(500).send({message: err.message})
    }
});

router.patch("/:id", async(req, res) =>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true}).lean().exec();

        return res.status(201).send({user: user});
    }catch(err){
        res.status(500).send({message: err.message})
    }
});

router.delete("/:id", async(req, res) =>{
    try{
        const user = await User.findByIdAndDelete(req.params.id).lean().exec();

        return res.status(201).send({user: user});
    }catch(err){
        res.status(500).send({message: err.message})
    }
});

module.exports = router;