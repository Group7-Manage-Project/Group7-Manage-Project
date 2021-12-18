var jwt = require('jsonwebtoken');
const Comment = require('../model/comment_task');

exports.get_list_comment_task = function(req,res){
    if(req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn', function(err,data){
            if(err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else {
                Comment.list(function(response){
                    res.send({result:response});
                })
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}

exports.details_comment_task = function(req,res){
    if(req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn', function(err,data){
            if(err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else {
                let comment_task_id = req.params.comment_task_id;;
                Comment.detail(comment_task_id, function(response){
                    res.send({result:response});
                })
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}

exports.insert_comment_task = function(req,res){
    if(req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn', function(err,data){
            if(err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else {
                let data = req.body;
                console.log("comment_task",data);
                Comment.create(data,function(response){
                    res.send({result:response});
                })
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}

exports.update_comment_task = function(req,res){
    if(req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn', function(err,data){
            if(err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else {
                let data = req.body;
                Comment.update(data,function(response){
                    res.send({result:response});
                })
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}

exports.delete_comment_task = function(req,res){
    if(req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn', function(err,data){
            if(err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else {
                let comment_task_id = req.params.comment_task_id;
                Comment.delete(comment_task_id, function(response){
                    res.send({result:response});
                })
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}