//import express
const express = require("express");
//for using express router
let router = express.Router();
//for getting data by specific id
let ObjectId = require("mongoose").Types.ObjectId;
//import employee model
let {Employee}= require("../models/employee");

//http://localhost:5000/employees


//read data api by GET method

router.get("/",(req,res)=>{
    Employee.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }else{
            console.log("Error in retrieving data"+ JSON.stringify(err,undefined,2)
            );
        }
    })
});

// create data

router.post("/",(req,res)=>{
    let emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    emp.save((err,doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log("Error in saving data"+ JSON.stringify(err,undefined,2)
            );
        }
    });
});


//find by id
router.get("/:id",(req,res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with ${req.params.id}`);
    Employee.findById(req.params.id,(err,doc) =>{
        if(!err){
            res.send(doc);
        }else{
            console.log("Kuch error"+JSON.stringify(err,undefined,2)
            );
        }
    });
});

// Update data by using PUT method

router.put("/:id",(req,res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with ${req.params.id}`);

    let emp = {
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary
    };

Employee.findByIdAndUpdate(
    req.params.id,
    {$set:emp},
    {new:true},
    (err,doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log(
                "Error in Employee Update" + JSON.stringify(err,undefined,2)
            );
        }
    }
)

});


module.exports = router;

