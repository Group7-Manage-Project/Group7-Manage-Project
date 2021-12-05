const Comment = require('../model/comment_task');

exports.get_list_comment_task = function(req,res){
    Comment.list(function(response){
        res.send({result:response});
    })
}

exports.details_comment_task = function(req,res){
    let comment_task_id = req.params.comment_task_id;;
    Comment.detail(comment_task_id, function(response){
        res.send({result:response});
    })
}

exports.insert_comment_task = function(req,res){
    let data = req.body;
    console.log("comment_task",data);
    Comment.create(data,function(response){
        res.send({result:response});
    })
}

exports.update_comment_task = function(req,res){
    let data = req.body;
    Comment.update(data,function(response){
        res.send({result:response});
    })
}

exports.delete_comment_task = function(req,res){
    let comment_task_id = req.params.comment_task_id;
    Comment.delete(comment_task_id, function(response){
        res.send({result:response});
    })
}