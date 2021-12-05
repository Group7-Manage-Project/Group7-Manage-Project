const db = require('../common/connect');
const jwt = require('jsonwebtoken');
const moment =  require('moment');

const Comment = function(comment) {
    this.comment_task_id = comment_task_id;
    this.user_comment_id = user_comment_id;
    this.phase_name = phase_name;
    this.comment = comment;
    this.create_comment_date = create_comment_date;
    this.task_id = task_id;
}

Comment.list = function(result) {
    const query = "SELECT * FROM COMMENT_TASK";
    db.query(query, function(err,comment){
        if (err) {
            result("Get list failure");
        }
        else{
            comment.map(item=>item.CREATE_COMMENT_DATE = moment(item.CREATE_COMMENT_DATE).format("DD/MM/YYYY"));
            result(comment);
        }
    })
}

Comment.detail = function(comment_task_id, result){
    const query = `
    WITH USER_COMMENT_T AS
    (
        SELECT A.USER_NAME AS USER_COMMENT, B.COMMENT_TASK_ID
        FROM STAFF A, COMMENT_TASK B
        WHERE A.EMPLOYEE_ID = B.USER_COMMENT_ID AND B.COMMENT_TASK_ID = ?
    ),
    TASK_JOB_T AS
    (
        SELECT A.JOB AS TASK_JOB, B.COMMENT_TASK_ID
        FROM TASK A, COMMENT_TASK B
        WHERE A.TASK_ID = B.TASK_ID AND B.COMMENT_TASK_ID = ?
    ),
    COMMENT_TASK_T AS 
    (
        SELECT *
        FROM COMMENT_TASK
        WHERE COMMENT_TASK_ID = ?
    )

    SELECT A.*, B.*, C.*
    FROM COMMENT_TASK_T A,USER_COMMENT_T B,TASK_JOB_T C
    `;

    db.query(query,[comment_task_id,comment_task_id,comment_task_id],function(err,comment_task) {
        if (err || comment_task.length == 0){
            result("Không có comment_task cần tìm");
        }
        else{
            comment_task.map(item => item.CREATE_COMMENT_DATE = moment(item.START_DATE).format("DD/MM/YYYY"));
            result(comment_task[0]);
        }
    })
}

Comment.create = function(data,result){
    const query = "INSERT INTO COMMENT_TASK (USER_COMMENT_ID,PHASE_NAME,COMMENT,CREATE_COMMENT_DATE,TASK_ID) VALUES (?,?,?,DATE_FORMAT(SYSDATE(), '%Y-%m-%d'),?)";
    db.query(query,[data.user_comment_id,data.phase_name,data.comment,data.task_id],function(err){
        if(err){
            result("Add failure");
        }
        else{
            result("Add successful :)");
        }
    })
}

Comment.update = function(data,result){
    const query = "UPDATE COMMENT_TASK SET PHASE_NAME = ? , COMMENT = ? , CREATE_COMMENT_DATE = DATE_FORMAT(SYSDATE(), '%Y-%m-%d') WHERE COMMENT_TASK_ID = ?";
    db.query(query,[data.phase_name,data.comment,data.comment_task_id],function(err){
        if (err) {
            result("Error updating comment");
        }
        else{
            result("Update successful");
        }
    })
}

Comment.delete = function(comment_task_id, result){
    const query = "DELETE FROM COMMENT_TASK WHERE COMMENT_TASK_ID = ?";
    db.query(query,comment_task_id,function(err){
        if(err){
            result("Error deleting comment");
        }
        else{
            result("Delete successful");
        }
    })
}

module.exports = Comment;