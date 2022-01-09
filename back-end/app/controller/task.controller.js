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
                    if (response !== "Lấy danh sách Task không thành công :("){
                        console.log("response", response)
                        res.send({result:response})
                    }
                    else {
                        res.status(404).send({message:'Lấy danh sách Task không thành công :('});
                    }
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
                    if (response !== "Không có task cần tìm"){
                        res.send({result:response})
                    }
                    else {
                        res.status(404).send({message:'Không có task cần tìm'});
                    }
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
                    if (response !== "Thêm task thất bại :( "){
                        res.send({result:response})
                    }
                    else {
                        res.status(404).send({message:'Thêm task thất bại :( '});
                    }
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
                    if (response !== "Cập nhật không thành công :("){
                        res.send({result:response})
                    }
                    else {
                        res.status(404).send({message:'Cập nhật không thành công :('});
                    }
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
                    if (response !== "Lấy danh sách số lượng Task không thành công :("){
                        res.send({result:response})
                    }
                    else {
                        res.status(404).send({message:'Lấy danh sách số lượng Task không thành công :('});
                    }
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
                    if (response !== "Lấy danh sách số lượng employee mỗi phase không thành công :("){
                        res.send({result:response})
                    }
                    else {
                        res.status(404).send({message:'Lấy danh sách số lượng employee mỗi phase không thành công :('});
                    }
                })
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}

exports.get_task_todo = function(req,res){
    if (req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn',function(err,data){
            if (err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else{
                let data = req.body;
                console.log("data user", data )
                Task.get_task_todo_by_employee_id(data,function(response){
                    if (response !== "Get failed"){
                        res.send({result:response})
                    }
                    else {
                        res.status(404).send({message:'Get failed'});
                    }
                })
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}

exports.get_task_doing = function(req,res){
    if (req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn',function(err,data){
            if (err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else{
                let data = req.body;
                Task.get_task_doing_by_employee_id(data,function(response){
                    if (response !== "Get failed"){
                        res.send({result:response})
                    }
                    else {
                        res.status(404).send({message:'Get failed'});
                    }
                })
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}

exports.get_task_done = function(req,res){
    if (req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn',function(err,data){
            if (err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else{
                let data = req.body;
                Task.get_task_done_by_employee_id(data,function(response){
                    if (response !== "Get failed"){
                        res.send({result:response})
                    }
                    else {
                        res.status(404).send({message:'Get failed'});
                    }
                }) 
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}