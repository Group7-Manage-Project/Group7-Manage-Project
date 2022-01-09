var jwt = require('jsonwebtoken');
const Schedule = require('../model/schedule');
var response = require('../../res');
const db = require('../common/connect');

exports.get_list_schedules = function(req,res){
    if (req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn',function(err,data){
            if (err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else{
                Schedule.list(function(response){
                    if (response !== "Get list failed"){
                        res.send({result:response})
                    }
                    else {
                        res.status(404).send({message:'Get list failed'});
                    }
                })
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}

exports.detail_schedule = function(req,res){
    if (req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn',function(err,data){
            if (err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else{
                let employee_id = req.params.employee_id;
                console.log("Id: ", employee_id)
                Schedule.details(employee_id, function(response){
                    if (response !== "Get details failed"){
                        res.send({result:response})
                    }
                    else {
                        res.status(404).send({message:'Get details failed'});
                    }
                })
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}

exports.insert_schedule = function(req,res){
    if (req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn',function(err,data){
            if (err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else{
                let data = req.body;
                Schedule.create(data, function(response){
                    if (response !== "Insert failed"){
                        res.send({result:response})
                    }
                    else {
                        res.status(404).send({message:'Insert failed'});
                    }
                })
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}

exports.update_schedule = function(req,res){
    if (req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn',function(err,data){
            if (err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else{
                let data = req.body;
                Schedule.update(data, function(response){
                    if (response !== "update failed"){
                        res.send({result:response})
                    }
                    else {
                        res.status(404).send({message:'update failed'});
                    }
                })
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}

exports.delete_schedule = function(req,res){
    if (req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn',function(err,data){
            if (err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else{
                let IdSchedule = req.params.IdSchedule;
                console.log("IdSchedule: ",IdSchedule)
                Schedule.delete(IdSchedule, function(response){
                    if (response !== "delete failed"){
                        res.send({result:response})
                    }
                    else {
                        res.status(404).send({message:'delete failed'});
                    }
                })
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
    
}

