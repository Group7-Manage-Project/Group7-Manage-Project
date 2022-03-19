var jwt = require('jsonwebtoken');
const Department = require('../model/deparments');
var response = require('../../res');
const db = require('../common/connect');

exports.get_list_departments = function(req,res){
    if (req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn',function(err,data){
            if (err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else{
                Department.list(function(response){
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

exports.detail_department = function(req,res){
    if (req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn',function(err,data){
            if (err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else{
                let department_id = req.params.department_id;
                console.log("department_id: ", department_id)
                Department.details(department_id, function(response){
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

exports.insert_department = function(req,res){
    if (req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn',function(err,data){
            var decode = jwt.verify(token, 'team7project@uef.edu.vn').staff[0].ROLL;
            console.log('decode', decode)
            if (err || decode !== 'Admin'){
                return res.status(403).send({message:'Unauthorized'})
            }
            else{
                
                let data = req.body;
                Department.create(data, function(response){
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

exports.update_department = function(req,res){
    if (req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        var decode = jwt.verify(token, 'team7project@uef.edu.vn').staff[0].ROLL;
        jwt.verify(token,'team7project@uef.edu.vn',function(err,data){
            if (err || decode !== 'Admin'){
                return res.status(403).send({message:'Unauthorized'})
            }
            else{
                let data = req.body;
                Department.update(data, function(response){
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

exports.delete_department = function(req,res){
    if (req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        var decode = jwt.verify(token, 'team7project@uef.edu.vn').staff[0].ROLL;
        jwt.verify(token,'team7project@uef.edu.vn',function(err,data){
            if (err || decode !== 'Admin'){
                return res.status(403).send({message:'Unauthorized'})
            }
            else{
                let department_id = req.params.department_id;
                Department.delete(department_id, function(response){
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

// exports.get_tree_depart_cate = function(req,res){
//     const query = "SELECT DEPARTMENTS.DEPARTMENT_ID, DEPARTMENTS.DEPARTMENT_NAME, CATEGORY_TASK.CATEGORY_NAME FROM DEPARTMENTS JOIN CATEGORY_TASK WHERE CATEGORY_TASK.DEPARTMENT_ID = DEPARTMENTS.DEPARTMENT_ID ORDER BY DEPARTMENTS.DEPARTMENT_ID"
//     db.query(query,function(err,rows){
//         if(err){
//             console.log(err);
//         }
//         else{
//             response.nested(rows,res);
//         }
//     })
// }

exports.get_list_department_tree = function(req,res){
    if (req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn',function(err,data){
            if (err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else{
                Department.get_list_department_tree(function(response){
                    if (response !== "Mysql query execution error!"){
                        res.send({result:response})
                    }
                    else {
                        res.status(404).send({message:'Mysql query execution error!'});
                    }
                })
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}
