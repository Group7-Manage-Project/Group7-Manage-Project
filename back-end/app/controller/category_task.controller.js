var jwt = require('jsonwebtoken');
const Category = require('../model/category_task');
var response = require('../../res');
const db = require('../common/connect')

exports.get_list_category_task = function(req,res){
    if (req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn',function(err,data){
            if (err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else{
                Category.list(function(response){
                    res.send({result:response});
                })  
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}

exports.details_category_task = function(req,res){
    if(req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn', function(err,data){
            if(err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else {
                let category_task_id = req.params.category_task_id;
                Category.detail(category_task_id,function(response){
                    res.send({result:response});
                })
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}

exports.insert_category_task = function(req,res){
    if(req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn', function(err,data){
            if(err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else {
                let data = req.body
                console.log("category_task",data)
                Category.create(data,function(response){
                    res.send({result:response});
                })
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }  
}

exports.update_category_task = function(req,res){
    if(req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn', function(err,data){
            if(err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else {
                let data = req.body;
                Category.update(data,function(response){
                    res.send({result:response});
                })
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}

exports.delete_category_task = function(req,res){
    if(req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn', function(err,data){
            if(err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else {
                let category_task_id = req.params.category_task_id;
                Category.delete(category_task_id,function(response){
                    res.send({result:response});
                });
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}

exports.delete_category_task_flg = function(req,res){
    if(req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn', function(err,data){
            if(err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else {
                let data = req.body;
                Category.delete_flg(data,function(response){
                    res.send({result:response});
                })
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}

exports.get_tree_cate_task = function(req,res){
    const query = "SELECT CATEGORY_TASK.CATEGORY_TASK_ID, CATEGORY_TASK.CATEGORY_NAME, TASK.TITLE FROM CATEGORY_TASK JOIN TASK WHERE CATEGORY_TASK.CATEGORY_TASK_ID = TASK.CATEGORY_TASK_ID ORDER BY CATEGORY_TASK.CATEGORY_TASK_ID"
    db.query(query,function(err,rows){
        if (err){
            console.log("Error");
        }
        else{
            response.nested(rows,res);
        }
    })
}