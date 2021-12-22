const db = require('../common/connect');
const moment =  require('moment');

const Task = function(task){
    this.task_id = task.task_id;
    this.job = task.job;
    this.status = task.status;
    this.category = task.category;
    this.title = task.title;
    this.progress = task.progress;
    this.effort = task.effort;
    this.important = task.important;
    this.description = task.description;
    this.file = task.file;
    this.assignee_id = task.assignee_id;
    this.register_user_id = task.register_user_id;
    this.confirmation_id = task.confirmation_id;
    this.implementation_id =  task.implementation_id;
    this.test_id = task.test_id;
    this.approval_id = task.approval_id;
    this.finish_id = task.finish_id;
    this.start_date = task.start_date;
    this.end_date = task.end_date;
    this.step = task.step;
}

//Get list task
Task.list = function(data,data1,result) {
    let query = `
    SELECT *
    FROM(
                WITH REGISTER_T AS
        (
            SELECT B.FULL_NAME AS REGISTER_USER_NAME, A.TASK_ID
            FROM TASK A, STAFF B
            WHERE A.REGISTER_USER_ID = B.EMPLOYEE_ID
        ),
        ASSIGNEE_T AS
        (
            SELECT B.FULL_NAME AS ASSIGNEE_NAME, A.TASK_ID
            FROM TASK A, STAFF B
            WHERE A.ASSIGNEE_ID = B.EMPLOYEE_ID
        ),
        CATEGORY_TASK_T AS
        (
            SELECT B.CATEGORY_NAME, A.TASK_ID   
            FROM TASK A, CATEGORY_TASK B
            WHERE A.CATEGORY_TASK_ID = B.CATEGORY_TASK_ID
        )
        SELECT * 
        FROM(
            SELECT A.TASK_ID, A.JOB,A.STATUS,A.CATEGORY,A.TITLE,A.PROGRESS,A.EFFORT,A.ASSIGNEE_ID,A.REGISTER_USER_ID,A.START_DATE,A.END_DATE,A.CATEGORY_TASK_ID,B.REGISTER_USER_NAME,C.ASSIGNEE_NAME,D.CATEGORY_NAME
            FROM TASK A, REGISTER_T B, ASSIGNEE_T C, CATEGORY_TASK_T D
            WHERE A.TASK_ID = B.TASK_ID AND A.TASK_ID = C.TASK_ID AND A.TASK_ID = D.TASK_ID
            LIMIT 1
            OFFSET 1
        ) AS A
    ) AS T2
    WHERE 1=1
    `;
// 3 condition
    // 3 Category, Job, Status have condition
    let condition1 = `AND JOB = '${data1.search_job}'`
    let condition2 = `AND CATEGORY = '${data1.search_category}'`
    let condition3 = `AND STATUS = '${data1.search_state}'`

    console.log("data", data)
    console.log("data1", data1)
    if(data1.search_job !== 'ALL'){
        query = query.concat(condition1)
    }
    // if(data1.search_category !== 'ALL'){
    //     query = query.concat(condition2)
    // }
    // if(data1.search_state !== 'ALL'){
    //     query = query.concat(condition3)
    // }
    
    db.query(query, function(err, task){
        if(err){
            result("Lấy danh sách Task không thành công :(");
        }
        else{
            task.map(item =>{
                item.START_DATE = moment(item.START_DATE).format("DD/MM/YYYY")
                item.END_DATE = moment(item.END_DATE).format("DD/MM/YYYY")
            })
            result(task)
        }
    });
    

}

//Get details of a task
Task.detail = function(task_id, result) {
    const query = `
    WITH REGISTER_T AS
    (
        SELECT  A.REGISTER_USER_ID ,B.IMAGE AS IMAGE_REGISTER , B.FULL_NAME AS FULL_NAME_REGISTER 
        FROM TASK A, STAFF B
        WHERE A.REGISTER_USER_ID = B.EMPLOYEE_ID AND A.TASK_ID = ?
    ),
    ASSIGNEE_T AS
    (
        SELECT  A.ASSIGNEE_ID ,B.IMAGE AS IMAGE_ASSIGNEE , B.FULL_NAME AS FULL_NAME_ASSIGNEE 
        FROM TASK A, STAFF B
        WHERE A.ASSIGNEE_ID = B.EMPLOYEE_ID AND A.TASK_ID = ?
    ),
    CONFIRMATION_T AS
    (
        SELECT  A.CONFIRMATION_ID ,B.IMAGE AS IMAGE_CONFIRMATION , B.FULL_NAME AS FULL_NAME_CONFIRMATION 
        FROM TASK A, STAFF B
        WHERE A.CONFIRMATION_ID = B.EMPLOYEE_ID AND A.TASK_ID = ?
    ),
    IMPLEMENTATION_T AS
    (
        SELECT  A.IMPLEMENTATION_ID ,B.IMAGE AS IMAGE_IMPLEMENTATION , B.FULL_NAME AS FULL_NAME_IMPLEMENTATION 
        FROM TASK A, STAFF B
        WHERE A.IMPLEMENTATION_ID = B.EMPLOYEE_ID AND A.TASK_ID = ?
    ),
    TEST_T AS
    (
        SELECT  A.TEST_ID ,B.IMAGE AS IMAGE_TEST , B.FULL_NAME AS FULL_NAME_TEST 
        FROM TASK A, STAFF B
        WHERE A.TEST_ID = B.EMPLOYEE_ID AND A.TASK_ID = ?
    ),
    APPROVAL_T AS
    (
        SELECT  A.APPROVAL_ID ,B.IMAGE AS IMAGE_APPROVAL , B.FULL_NAME AS FULL_NAME_APPROVAL 
        FROM TASK A, STAFF B
        WHERE A.APPROVAL_ID = B.EMPLOYEE_ID AND A.TASK_ID = ?
    ),
    FINISH_T AS
    (
        SELECT  A.FINISH_ID ,B.IMAGE AS IMAGE_FINISH , B.FULL_NAME AS FULL_NAME_FINISH 
        FROM TASK A, STAFF B
        WHERE A.FINISH_ID = B.EMPLOYEE_ID AND A.TASK_ID = ?
    ),
    CATEGORY_TASK_T AS
    (
        SELECT A.CATEGORY_TASK_ID, B.CATEGORY_NAME
        FROM TASK A, CATEGORY_TASK B
        WHERE A.CATEGORY_TASK_ID = B.CATEGORY_TASK_ID AND A.TASK_ID = ?
    ),
    COMMENT_TASK_T AS
    (
        SELECT A.TASK_ID, C.FULL_NAME AS USER_COMMENT, B.PHASE_NAME, B.COMMENT, B.CREATE_COMMENT_DATE
        FROM TASK A, COMMENT_TASK B, STAFF C
        WHERE A.TASK_ID = B.TASK_ID AND B.USER_COMMENT_ID = C.EMPLOYEE_ID AND A.TASK_ID = ?
    ),
    TASK_T AS
    (
        SELECT *
        FROM TASK
        WHERE TASK_ID = ?
    )
    SELECT A.*, B.*,C.*,D.*,E.*,F.*,G.*, H.*, I.*, J.*
    FROM TASK_T A,REGISTER_T B,ASSIGNEE_T C,CONFIRMATION_T D,IMPLEMENTATION_T E,TEST_T F,APPROVAL_T G,FINISH_T H, CATEGORY_TASK_T I, COMMENT_TASK_T J
    `;
    db.query(query,[task_id,task_id,task_id,task_id,task_id,task_id,task_id,task_id,task_id,task_id],function(err, task){
        if(err || task.length == 0){
            result("Không có task cần tìm");
        }
        else{
            // console.log("staff",staff)
            task.map(item =>{
                item.START_DATE = moment(item.START_DATE).format("DD/MM/YYYY")
                item.END_DATE = moment(item.END_DATE).format("DD/MM/YYYY")
                item.CREATE_COMMENT_DATE = moment(item.CREATE_COMMENT_DATE).format("DD/MM/YYYY")
                item.FILE = `http://localhost:9999/get-file/${item.FILE}` // API trả về file
                item.IMAGE_REGISTER = `http://localhost:9999/get-image/${item.IMAGE_REGISTER}`
                item.IMAGE_CONFIRMATION = `http://localhost:9999/get-image/${item.IMAGE_CONFIRMATION}`
                item.IMAGE_ASSIGNEE = `http://localhost:9999/get-image/${item.IMAGE_ASSIGNEE}`
                item.IMAGE_IMPLEMENTATION = `http://localhost:9999/get-image/${item.IMAGE_IMPLEMENTATION}`
                item.IMAGE_TEST = `http://localhost:9999/get-image/${item.IMAGE_TEST}`
                item.IMAGE_APPROVAL = `http://localhost:9999/get-image/${item.IMAGE_APPROVAL}`
                item.IMAGE_FINISH = `http://localhost:9999/get-image/${item.IMAGE_FINISH}`            
            })
            // result(task)
            result(task[0]);
        }
    })
}

//Insert task
Task.create = function(data,file,result){
    const query = "INSERT INTO task (JOB,STATUS,CATEGORY,TITLE,PROGRESS,EFFORT,IMPORTANT,DESCRIPTION,FILE,ASSIGNEE_ID,REGISTER_USER_ID,CONFIRMATION_ID,IMPLEMENTATION_ID,TEST_ID,APPROVAL_ID,FINISH_ID,START_DATE,END_DATE,STEP,CATEGORY_TASK_ID) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,DATE_FORMAT(SYSDATE(), '%Y-%m-%d'),?,?,?)"
    if(file && file !== undefined){
        db.query(query,[data.job,data.status,data.category,data.title,data.progress,data.effort,data.important,data.description,file.filename,data.assignee_id,data.register_user_id,data.confirmation_id,data.implementation_id,data.test_id,data.approval_id,data.finish_id,data.end_date,data.step,data.category_task_id],function(err){
            if(err){
                result("Thêm task thất bại :( ")
            }
            else{
                result("Thêm task thành công :)")
            }
        })
    }
    else{
        db.query(query,[data.job,data.status,data.category,data.title,data.progress,data.effort,data.important,data.description,data.file,data.assignee_id,data.register_user_id,data.confirmation_id,data.implementation_id,data.test_id,data.approval_id,data.finish_id,data.end_date,data.step,data.category_task_id],function(err){
            if(err){
                result("Thêm task thất bại :( ")
            }
            else{
                result("Thêm task thành công :)")
            }
        })
    }
}

//Update task
Task.update = function(data,file,result){
    const query = "UPDATE TASK SET JOB = ?, STATUS = ?, CATEGORY = ?, TITLE = ?, PROGRESS = ?, EFFORT = ?, IMPORTANT = ?, DESCRIPTION = ?, FILE = ?, ASSIGNEE_ID = ?, REGISTER_USER_ID = ?, CONFIRMATION_ID = ?, IMPLEMENTATION_ID = ?, TEST_ID = ?, APPROVAL_ID = ?, FINISH_ID = ?, END_DATE = ?, STEP = ?, CATEGORY_TASK_ID = ? WHERE TASK_ID = ?";
    if (file && file !== undefined){
        db.query(query,[data.job,data.status,data.category,data.title,data.progress,data.effort,data.important,data.description,file.filename,data.assignee_id,data.register_user_id,data.confirmation_id,data.implementation_id,data.test_id,data.approval_id,data.finish_id,data.end_date,data.step,data.category_task_id,data.task_id],function(err){
            if(err){
                result("Cập nhật không thành công :(");
            }
            else{
                result("Cập nhật thành công :)");
            }
        });
    }
    else{
        db.query(query,[data.job,data.status,data.category,data.title,data.progress,data.effort,data.important,data.description,data.file,data.assignee_id,data.register_user_id,data.confirmation_id,data.implementation_id,data.test_id,data.approval_id,data.finish_id,data.end_date,data.step,data.category_task_id,data.task_id],function(err){
            if(err){
                result("Cập nhật không thành công :(");
            }
            else{
                result("Cập nhật thành công :)");
            }
        });
    }
}

//update assignee
Task.update_assignee = function(result){
    const query = "UPDATE TASK SET ASSIGNEE_ID = ? WHERE TASK_ID = ? AND STEP = ?"
    db.query(query, function(err){
        if (err) { result("update failed");}
        else{
            
        }
    })
}

//Delete task
// Task.delete = function(task_id,result){
//     const query = "DELETE FROM TASK WHERE TASK_ID = ?"
//     db.query(query,task_id,function(err){
//         if(err){
//             result("Xóa task không thành công :)");
//         }
//         else{
//             result("Xóa task thành công :)");
//         }
//     })
// }

//Count category task
Task.count_task_category = function(result) {
    // const query = `
    // WITH COUNT_KFC AS(
    //     SELECT COUNT(*) AS COUNT_KFC
    //     FROM TASK
    //     WHERE CATEGORY = 'KFC'
    // ),
    // COUNT_CYBER AS(
    //     SELECT COUNT(*) AS COUNT_CYBER
    //     FROM TASK
    //     WHERE CATEGORY = 'DEK'
    // ),
    // COUNT_TOTAL_TASK AS(
    //     SELECT COUNT(*) AS COUNT_TOTAL_TASK
    //     FROM TASK
    // ),
    // SELECT A.*, B.*, C.*
    // FROM COUNT_KFC A, COUNT_CYBER B, COUNT_TOTAL_TASK C
    // `;
    const query = "SELECT CATEGORY, COUNT(JOB) AS COUNT_TASK FROM TASK GROUP BY CATEGORY";
    db.query(query, function(err, task){
        if(err){
            result("Lấy danh sách Task không thành công :(");
        }
        else{
            result(task)
        }
    });
}

//count employee
Task.count_employees_phase = function(result) {
    const query = `
    WITH COUNT_REGISTER AS(
        SELECT COUNT(DISTINCT REGISTER_USER_ID) AS COUNT_REGISTER_USER
        FROM TASK
    ),
    COUNT_CONFIRMATION AS(
        SELECT COUNT(DISTINCT CONFIRMATION_ID) AS COUNT_CONFIRMATION
        FROM TASK
    ),
    COUNT_IMPLEMENTATION AS(
        SELECT COUNT(DISTINCT IMPLEMENTATION_ID) AS COUNT_IMPLEMENTATION
        FROM TASK
    ),
    COUNT_TEST AS(
        SELECT COUNT(DISTINCT TEST_ID) AS COUNT_TEST
        FROM TASK
    ),
    COUNT_APPROVAL AS(
        SELECT COUNT(DISTINCT APPROVAL_ID) AS COUNT_APPROVAL
        FROM TASK
    ),
    COUNT_FINISH AS(
        SELECT COUNT(DISTINCT FINISH_ID) AS COUNT_FINISH
        FROM TASK
    ),
    COUNT_TOTAL_PERSON AS(
        SELECT COUNT(*) AS COUNT_EMPLOYEES
        FROM STAFF
    )
    
    SELECT A.*, B.*, C.*, D.*, E.*,F.*,G.*
    FROM COUNT_REGISTER A, COUNT_CONFIRMATION B , COUNT_IMPLEMENTATION C, COUNT_TEST D, COUNT_APPROVAL E, COUNT_FINISH F, COUNT_TOTAL_PERSON G
    `;
    db.query(query, function(err, task){
        if(err){
            result("Lấy danh sách Task không thành công :(");
        }
        else{
            result(task)
        }
    });
}



module.exports =  Task