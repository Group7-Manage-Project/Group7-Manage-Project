const Category = require('../model/category_task');

exports.get_list_category_task = function(req,res){
    Category.list(function(response){
        res.send({result:response});
    })
}

exports.details_category_task = function(req,res){
    let category_task_id = req.params.category_task_id;
    Category.detail(category_task_id,function(response){
        res.send({result:response});
    })
}

exports.insert_category_task = function(req,res){
    let data = req.body
    console.log("category_task",data)
    Category.create(data,function(response){
        res.send({result:response});
    })
} // CTRL + C ĐỂ TẮT SEVER, SAU ĐÓ NODE INDEX ĐỂ CHẠY LẠI, SAU LỖI LẦN SỬA

exports.update_category_task = function(req,res){
    let data = req.body;
    Category.update(data,function(response){
        res.send({result:response});
    })
}

exports.delete_category_task = function(req,res){
    let category_task_id = req.params.category_task_id;
    Category.delete(category_task_id,function(response){
        res.send({result:response});
    });
}

exports.delete_category_task_flg = function(req,res){
    let data = req.body;
    Category.delete_flg(data,function(response){
        res.send({result:response});
    })
}