const Staff = require('../model/staff');


exports.get_list_employee = function(req,res){
    Staff.list(function(response){
        res.send({result:response})
    })
}

exports.get_list_employee_name_image = function(req,res){
    Staff.list_name_image(function(response){
        res.send({result:response})
    })
}

exports.details_employee = function(req,res){
    let employee_id = req.params.employee_id;
    Staff.detail(employee_id,function(response){
        res.send({result:response})
    })
}

exports.insert_employee = function(req,res){
    let data = req.body;
    let file = req.file;
    console.log("file",req.file);
    console.log("staff", data)
    Staff.create(data,file,function(response){
        res.send({result:response});
    })
}

exports.update_employee = function(req,res){
    let data = req.body;
    let file = req.file;
    console.log("file",req.file);
    Staff.update(data,file,function(response){
        res.send({result:response});
    })
}

exports.delete_employee = function(req,res){
    let employee_id = req.params.employee_id;
    Staff.delete(employee_id,function(response){
        res.send({result:response});
    });
}

exports.delete_employee_flg = function(req,res){
    let data = req.body;
    Staff.delete_flg(data,function(response){
        res.send({result:response});
    })
}

exports.login_employee = function(req,res){
    let data = req.body;
    Staff.login(data,function(response){
        res.send(response);
    })
}

