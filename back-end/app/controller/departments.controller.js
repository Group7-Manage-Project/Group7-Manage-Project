var jwt = require('jsonwebtoken');
const Department = require('../model/deparments');
var response = require('../../res');
const db = require('../common/connect');

exports.get_list_departments = function(req,res){
    Department.list(function(response){
        res.send({result: response});
    })
}

exports.detail_department = function(req,res){
    let department_id = req.params.department_id;
    Department.details(department_id, function(response){
        res.send({result: response});
    })
}

exports.insert_department = function(req,res){
    let data = req.body;
    Department.create(data, function(response){
        res.send({result: response});
    })
}

exports.update_department = function(req,res){
    let data = req.body;
    Department.update(data, function(response){
        res.send({result: response});
    })
}

exports.delete_department = function(req,res){
    let department_id = req.params.department_id;
    Department.delete(department_id, function(response){
        res.send({result: response});
    })
}

exports.get_tree_depart_cate = function(req,res){
    const query = "SELECT DEPARTMENTS.DEPARTMENT_ID, DEPARTMENTS.DEPARTMENT_NAME, CATEGORY_TASK.CATEGORY_NAME FROM DEPARTMENTS JOIN CATEGORY_TASK WHERE CATEGORY_TASK.DEPARTMENT_ID = DEPARTMENTS.DEPARTMENT_ID ORDER BY DEPARTMENTS.DEPARTMENT_ID"
    db.query(query,function(err,rows){
        if(err){
            console.log(err);
        }
        else{
            response.nested(rows,res);
        }
    })
}

exports.get_list_department_tree = function(req,res){
    Department.get_list_department_tree(function(response){
        res.send({result: response});
    })
}
