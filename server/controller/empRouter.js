const express = require('express');
const router = express.Router();
var Employee = require('../model/employee');
var ObjectID =  require('mongoose').Types.ObjectId;


router.get('/' , (req , res) => {
    Employee.find((err , docs) => {
        if(err){
            res.status(401).send(err);
        }
        else{
            res.status(200).send(docs);
        }
    })
})

router.get('/:id' , (req , res) => {
if(!ObjectID.isValid(req.params.id)){
    res.status(400).send(`no record find with id ${req.params.id}`)
}else{
    Employee.findById(req.params.id ,(err , docs) => {
        if(err){
            res.status(401).send(err);
        }
        else{
            res.status(200).send(docs);
        }
    })
}
})

router.post('/' , (req , res) => {
    var emp = new Employee({
        name: req.body.name,
        fatherName: req.body.fatherName,
        city: req.body.city,
        mobile: req.body.mobile
    })

    emp.save((err , docs) => {
        if(err){
            res.status(401).send(err);
        }
        else{
            res.status(200).send(docs);
        }
    })
})
router.delete('/:id' , (req , res) => {
    if(!ObjectID.isValid(req.params.id)){
        res.status(400).send(`no record find with id ${req.params.id}`)
    }else{
        Employee.findByIdAndRemove(req.params.id ,(err , docs) => {
            if(err){
                res.status(401).send(err);
            }
            else{
                res.status(200).send(docs);
            }
        })
    }
})

router.put('/:id' , (req, res) => {
   
    var emp = {
        name: req.body.name,
        fatherName: req.body.fatherName,
        city: req.body.city,
        mobile: req.body.mobile
    }
   
    if(!ObjectID.isValid(req.params.id)){
        res.status(400).send(`no record find with id ${req.params.id}`)
    }
    else{
        Employee.findByIdAndUpdate(req.params.id , {$set: emp} , {new: true} , (err , docs) => {
            if(err){
                res.status(401).send(err);
            }
            else{
                res.status(200).send(docs);
            }
        })
    }

})


module.exports = router;