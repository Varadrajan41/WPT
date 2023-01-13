 var express=require("express");
 var mongoose= require("mongoose");

 const{modelname}= require ("mongoose");
 var router = express.Router();

 var schema=mongoose.Schema;

 var empschema= new schema({
     id:String,name:String,Salary:String
 })

 var Emp= mongoose.model('emp',empschema,'emp');

 router.get("/login",function(req,resp){
     Emp.find().exec(function(err,data){
         if(err){
             resp.status(500).send("data not found");
         }else{
             console.log(data);
             resp.send(data);
         }
     })
 })

 router.post("/login/:id",function(req,resp){
    Emp.findOne({id:req.body.id},function(err,data){
        if(err){
            console.log("data not found");
            resp.status(500).send("wrong id");
        }else{
            if(data.name===req.body.name){
            resp.send("OKAY");
        }

        }
    })
 })

 module.exports=router;

