const db = require('../common/connect');
const moment = require('moment');

const Category = function(category) {
    this.category_task_id = category.category_task_id;
    this.category_name = category.category_name;
    this.create_date = category.create_date;
    this.create_user = category.create_user;
    this.update_date = category.update_date;
    this.update_user = category.update_user;
    this.delete_flg = category.delete_flg;
}
// cậu chạy node index trong phần terminal, để run cái project
Category.list = function(result) {
    const query = "SELECT * FROM CATEGORY_TASK";
    db.query(query, function(err, category){
        if (err) {
            result("Lấy danh sách Category không thành công :(");
        }
        else {
            category.map(item=>{
                item.CREATE_DATE = moment(item.CREATE_DATE).format("DD/MM/YYYY");
                item.UPDATE_DATE = moment(item.UPDATE_DATE).format("DD/MM/YYYY");
            })
            result(category)
        }
    });
}

Category.detail = function(category_task_id, result) {
    const query = "SELECT * FROM CATEGORY_TASK WHERE CATEGORY_TASK_ID = ?";
    db.query(query, category_task_id, function(err, category) {
        if (err || category.length == 0){
            result("Không có danh sách task cần tìm");
        }
        else{
            result(category[0]);
        }
    })
}

Category.create = function(data,result){
    const query = "INSERT INTO CATEGORY_TASK (CATEGORY_NAME,CREATE_DATE,CREATE_USER,DELETE_FLG) VALUES(?,DATE_FORMAT(SYSDATE(), '%Y-%m-%d'),?,?)";
    db.query(query,[data.category_name,data.create_user,data.delete_flg],function(err){
        if (err){
            result("Thêm category task thất bại");
        }
        else{
            result("Thêm category task thành công");
        }
    })
}

Category.update = function(data,result){
    const query = "UPDATE CATEGORY_TASK SET CATEGORY_NAME = ?, UPDATE_DATE = DATE_FORMAT(SYSDATE(), '%Y-%m-%d'), UPDATE_USER = ?, DELETE_FLG = ? WHERE CATEGORY_TASK_ID = ?";
    db.query(query,[data.category_name,data.update_user,data.delete_flg, data.category_task_id], function(err){
        if (err) {
            result("Cập nhật không thành công");
        }
        else {
            result("Cập nhật thành công");
        }
    });
}

Category.delete = function(category_task_id, result){
    const query = "DELETE FROM CATEGORY_TASK WHERE CATEGORY_TASK_ID = ?";
    console.log('category_task_id',category_task_id)
    db.query(query,category_task_id,function(err){
        if (err) {
            result("Xóa loại task không thành công");
        }
        else {
            result("Xóa loại task thành công");
        }
    });
}

Category.delete_flg = function (data,result) {
    const query = "UPDATE CATEGORY_TASK SET DELETE_FLG = ? WHERE CATEGORY_TASK_ID = ? ";
    db.query(query,[data.delete_flg,data.category_task_id],function(err){
        if (err){
            result("Chuyển cờ không thành công");
        }
        else{
            result("Chuyển cờ thành công");
        }
    });
}

module.exports = Category;