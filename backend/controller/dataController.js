const express = require("express");
const Data = require('../models/Data')
const mongoose = require('mongoose');

const dataController = {
index : async (req,res) => {
    let datas = await Data.find().sort({createdAt : -1 });
    return res.json(datas);
},
create : async (req,res) => {
    try {
        const {description,price,date} = req.body;
        const data = await Data.create({
            description,
            price,
            date
        });
        return res.json(data);
    }catch(e) {
        return res.status(400).json({msg : "invalid fields"});
    }
},
show : async (req,res) => {
    try {
        let id = req.params.id;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({ msg : 'It is not a valid ID.'});
        };
        let data = await Data.findById(id);
        if(!data){
            return res.status(404).json({ msg : 'data not found.'});
        }
    }catch(e) {
        return res.status(500).json({ msg : 'Internet Server Error.'});
    }
},
delete : async(req,res)=>{
    try {
        let id = req.params.id;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({ msg : 'It is not a valid ID.'});
        };
        let data = await Data.findByIdAndDelete(id);
        if(!data){
            return res.status(404).json({ msg : 'data not found.'});
        }
    }catch(e) {
        return res.status(500).json({ msg : 'Internet Server Error.'});
    }
},
update : async(req,res)=>{
    try {
        let id = req.params.id;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({ msg : 'It is not a valid ID.'});
        };
        let data = await Data.findByIdAndUpdate(id, {
            ...req.body
        });
        if(!data){
            return res.status(404).json({ msg : 'data not found.'});
        }
        return res.json(data);
    }catch(e) {
        return res.status(500).json({ msg : 'Internet Server Error.'});
    }
}

}

module.exports= dataController;