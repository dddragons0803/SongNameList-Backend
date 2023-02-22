const express = require("express")
const Router = express.Router();
const crudmodel= require("../models/crudmodel")
Router.get("/", async (req,res)=>{
    try{
            const Crud = await crudmodel.find();
            res.json(Crud)
    }catch(err)
    { res.json({message:err})}
   
})
Router.post("/", async (req,res)=>{
    try{
    const Crud = await crudmodel.create({
        songname : req.body.songname,
        artist : req.body.artist
    });
    res.json(Crud)
    }
    catch(err)
    {
         res.json({message:err})
    }
   
})
Router.get("/:id", async (req,res)=>{
    try{
        const Crud = await crudmodel.findById(req.params.id);
        res.json(Crud)
        }
        catch(err)
        {
             res.json({message:err})
        }
})
Router.patch("/:id", async (req,res)=>{
    try{
        const Crud = await crudmodel.updateOne(
        {_id: req.params.id},
        {$set : {songname: req.body.songname}}
        );
        res.json(Crud)
        }
        catch(err)
        {
             res.json({message:err})
        }
})
Router.delete("/:id", async (req,res)=>{
    try{
        const Crud = await crudmodel.remove({
          _id: req.params.id });
        res.json(Crud)
        }
        catch(err)
        {
             res.json({message:err})
        }
})

module.exports = Router;
