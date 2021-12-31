var jwt = require('jsonwebtoken');
const Category = require('../model/category_task');

exports.get_list_category_task = function(req,res){
    if (req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn',function(err,data){
            if (err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else{
                Category.list(function(response){
                    if (response !== "Lấy danh sách Category không thành công :("){
                        res.send({result:response})
                    }
                    else {
                        res.status(404).send({message:'Lấy danh sách Category không thành công :('});
                    }
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
                    if (response !== "Không có danh sách task cần tìm"){
                        res.send({result:response})
                    }
                    else {
                        res.status(404).send({message:'Không có danh sách task cần tìm'});
                    }
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
                    if (response !== "Thêm category task thất bại"){
                        res.send({result:response})
                    }
                    else {
                        res.status(404).send({message:'Thêm category task thất bại'});
                    }
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
                    if (response !== "Cập nhật không thành công"){
                        res.send({result:response})
                    }
                    else {
                        res.status(404).send({message:'Cập nhật không thành công'});
                    }
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
                    if (response !== "Xóa loại task không thành công"){
                        res.send({result:response})
                    }
                    else {
                        res.status(404).send({message:'Xóa loại task không thành công'});
                    }
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
                    if (response !== "Chuyển cờ không thành công"){
                        res.send({result:response})
                    }
                    else {
                        res.status(404).send({message:'Chuyển cờ không thành công'});
                    }
                })
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }
}


exports.get_list_category_task_by_department = function(req,res){
    if(req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLocaleLowerCase() === 'bearer'){
        var token = req.headers.authorization.split(' ')[1];
        jwt.verify(token,'team7project@uef.edu.vn', function(err,data){
            if(err){
                return res.status(403).send({message:'Unauthorized'})
            }
            else {
                let data = req.body
                console.log("category_task",data)
                Category.get_list_category_task_by_department(data,function(response){
                    if (response !== "Lấy danh sách category theo departments không thành công :("){
                        res.send({result:response})
                    }
                    else {
                        res.status(404).send({message:'Lấy danh sách category theo departments không thành công :('});
                    }
                })
            }
        })
    }
    else{
        return res.status(403).send({message:'Unauthorized'});
    }  
}