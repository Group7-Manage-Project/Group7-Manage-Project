var jwt = require('jsonwebtoken');
const Task  = require('../model/task')
const perPage = 25


exports.get_list_task = function(req,res){
    if(req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn', function(err,data){
            if(err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else {
                let data1 = req.body;
                let page = req.params.page;
                page = parseInt(page)
                let page_skip = (page - 1) * perPage;
                let data = {
                    'limit': perPage,
                    'skip': page_skip
                }
                Task.list(data,data1,function(response){
                    console.log("response", response)
                    res.send({result:response})
                })
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}

exports.details_task = function(req,res){
    if(req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn', function(err,data){
            if(err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else {
                let task_id = req.params.task_id;
                Task.detail(task_id,function(response){
                    res.send({result:response})
                })
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}

exports.insert_task = function(req,res){
    if(req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn', function(err,data){
            if(err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else {
                let data = req.body
                let file = req.file
                console.log("task", req.body)
                console.log("file",req.file)
                Task.create(data,file,function(response){
                    res.send({result:response})
                })
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}

exports.update_task = function(req,res){
    if(req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn', function(err,data){
            if(err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else {
               let data = req.body;
                let file = req.file;
                console.log("task update",data);
                console.log("file",req.file);
                Task.update(data,file,function(response){
                    res.send({result:response});
                })
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}

// exports.delete_task = function(req,res){
//     let task_id = req.params.task_id;
//     Task.delete(task_id,function(response){
//         res.send({result:response});
//     });
// }

exports.count_task_category = function(req,res){
    if(req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn', function(err,data){
            if(err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else {
                Task.count_task_category(function(response){
                    res.send({result:response})
                })
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}

exports.count_employees_phase = function(req,res){
    if(req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn', function(err,data){
            if(err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else {
                Task.count_employees_phase(function(response){
                    res.send({result:response})
                })
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}
