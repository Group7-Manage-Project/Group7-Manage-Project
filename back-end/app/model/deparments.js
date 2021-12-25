const db = require('../common/connect');
let func = require('../common/convert-to-nested');

const Department = function (department) {
    this.department_id = department.department_id;
    this.department_name = department.department_name;
}

Department.list = function (result){
    const query = "SELECT * FROM DEPARTMENTS"
    db.query(query, function(err,department){
        if (err){
            result("Get list failed");
        }
        else{
            result(department);
        }
    })
}

Department.details = function (department_id, result){
    const query = "SELECT * FROM DEPARTMENTS WHERE DEPARTMENT_ID = ?";
    db.query(query, department_id, function (err, department){
        if (err || department.length == 0){
            result("Get details failed");
        }
        else {
            result(department[0]);
        }
    })
}

Department.create = function (data, result){
    const query = "INSERT INTO DEPARTMENTS (DEPARTMENT_NAME) VALUES (?)";
    db.query(query, [data.department_name], function(err){
        if (err) {
            result("Insert failed");
        }
        else {
            result("Insert successfully");
        }
    })
}

Department.update = function (data, result){
    const query= "UPDATE DEPARTMENTS SET DEPARTMENT_NAME = ? WHERE DEPARTMENT_ID = ?";
    db.query(query, [data.department_name,data.department_id], function(err){
        if (err){
            result("update failed");
        }
        else{
            result("update successfully");
        }
    })
}

Department.delete = function (department_id, result){
    const query = "DELETE FROM DEPARTMENTS WHERE DEPARTMENT_ID = ?";
    db.query(query, department_id, function(err){
        if (err){
            result("delete failed");
        }
        else{
            result("delete successfully");
        }
    })
}

Department.get_list_department_tree = function (result){
    let sql = "SELECT * FROM DEPARTMENTS, CATEGORY_TASK WHERE DEPARTMENTS.DEPARTMENT_ID = CATEGORY_TASK.DEPARTMENT_ID"
    let nestingOptions = [
        { tableName : 'DEPARTMENTS', pkey: 'DEPARTMENT_ID'},
        { tableName : 'CATEGORY_TASK', pkey: 'CATEGORY_TASK_ID', fkeys:[{table:'DEPARTMENTS',col:'DEPARTMENT_ID'}]}
        
    ];
    db.query({sql: sql, nestTables: true}, function (err, rows) {
        // error handling
        if (err){
            console.log('Internal error: ', err);
            result("Mysql query execution error!");
        }

        else {
            var nestedRows = func.convertToNested(rows, nestingOptions);
            // res.send(JSON.stringify(nestedRows));
            console.log("nestedRows", nestedRows)
            result(nestedRows);
        }

    });

}

module.exports = Department;