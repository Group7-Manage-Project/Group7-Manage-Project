const Task  = require('../model/task')


exports.get_list_task = function(req,res){
    Task.list(function(response){
        res.send({result:response})
    })
}

exports.details_task = function(req,res){
    let task_id = req.params.task_id;
    Task.detail(task_id,function(response){
        res.send({result:response})
    })
}

exports.insert_task = function(req,res){
    let data = req.body
    let file = req.file
    console.log("task", req.body)
    console.log("file",req.file)
    Task.create(data,file,function(response){
        res.send({result:response})
    })
}

exports.update_task = function(req,res){
    let data = req.body;
    let file = req.file;
    console.log("task update",data);
    console.log("file",req.file);
    Task.update(data,file,function(response){
        res.send({result:response});
    })
}

// exports.delete_task = function(req,res){
//     let task_id = req.params.task_id;
//     Task.delete(task_id,function(response){
//         res.send({result:response});
//     });
// }

exports.count_task_category = function(req,res){
    Task.count_task_category(function(response){
        res.send({result:response})
    })
}

exports.count_employees_phase = function(req,res){
    Task.count_employees_phase(function(response){
        res.send({result:response})
    })
}
