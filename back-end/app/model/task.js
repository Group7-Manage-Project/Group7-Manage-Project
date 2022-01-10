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
    this.category_task_id = task.category_task_id;
    this.department_name = task.department_name;    
}

//Get list task
Task.list = async function(data,data1,result) {
    let query = `
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
            SELECT A.TASK_ID, A.JOB,A.STATUS,A.CATEGORY,A.TITLE,A.PROGRESS,A.EFFORT,A.ASSIGNEE_ID,A.REGISTER_USER_ID,A.START_DATE,A.END_DATE,A.CATEGORY_TASK_ID,B.REGISTER_USER_NAME,C.ASSIGNEE_NAME,D.CATEGORY_NAME, A.DEPARTMENT_NAME
            FROM TASK A, REGISTER_T B, ASSIGNEE_T C, CATEGORY_TASK_T D
            WHERE A.TASK_ID = B.TASK_ID AND A.TASK_ID = C.TASK_ID AND A.TASK_ID = D.TASK_ID
            ORDER BY A.TASK_ID
            LIMIT ?
            OFFSET ?
        ) AS A
    WHERE 1=1
    `;
// 3 condition
    // 3 Category, Job, Status have condition
    let condition1 = `\n AND JOB = '${data1.search_job}'`
    let condition2 = `\n AND CATEGORY = '${data1.search_category}'`
    let condition3 = `\n AND STATUS = '${data1.search_state}'`
    let condition4 = `\n AND DEPARTMENT_NAME = '${data1.search_department_name}'`

    console.log("data", data)
    console.log("data1", data1)
    console.log("data1.search_job.toUpperCase()",data1.search_job.toUpperCase())
    if(data1.search_job && data1.search_job.toUpperCase() !== 'ALL'){
        query = await query.concat(condition1)
    }
    if(data1.search_category && data1.search_category.toUpperCase() !== 'ALL'){
        query = await query.concat(condition2)
    }
    if(data1.search_state && data1.search_state.toUpperCase() !== 'ALL'){
        query = await query.concat(condition3)
    }
    if(data1.search_department_name && data1.search_department_name.toUpperCase() !== 'ALL'){
        query = await query.concat(condition4)
    }
    console.log(query);
    db.query(query, [data.limit,data.skip], function(err, task){
        if(err){
            result("Lấy danh sách Task không thành công :(");
        }
        else{
            console.log("task.length",task.length);
            let task_length = task.length
            let total_page = 1
            if(task_length < 25){
                total_page = total_page
            }
            else{
                total_page = Math.round(task_length / 25)
            }
            console.log("total_page: ", total_page)
            task.map(item =>{
                item.START_DATE = moment(item.START_DATE).format("DD/MM/YYYY")
                item.END_DATE = moment(item.END_DATE).format("DD/MM/YYYY")
            })
            result({total_page:total_page,task:task});
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
    TASK_T AS
    (
        SELECT *
        FROM TASK
        WHERE TASK_ID = ?
    )
    SELECT A.*, B.*,C.*,D.*,E.*,F.*,G.*, H.*, I.*
    FROM TASK_T A,REGISTER_T B,ASSIGNEE_T C,CONFIRMATION_T D,IMPLEMENTATION_T E,TEST_T F,APPROVAL_T G,FINISH_T H, CATEGORY_TASK_T I
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
            setTimeout(()=>{console.log(task)},1000)
            result(task[0]);
        }
    })
}

//Insert task
Task.create = function(data,file,result){
    const query = "INSERT INTO task (JOB,STATUS,CATEGORY,TITLE,PROGRESS,EFFORT,IMPORTANT,DESCRIPTION,FILE,ASSIGNEE_ID,REGISTER_USER_ID,CONFIRMATION_ID,IMPLEMENTATION_ID,TEST_ID,APPROVAL_ID,FINISH_ID,START_DATE,END_DATE,STEP,CATEGORY_TASK_ID,DEPARTMENT_NAME) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,DATE_FORMAT(SYSDATE(), '%Y-%m-%d'),?,?,?,?)"
    if(file && file !== undefined){
        db.query(query,[data.job,data.status,data.category,data.title,data.progress,data.effort,data.important,data.description,file.filename,data.assignee_id,data.register_user_id,data.confirmation_id,data.implementation_id,data.test_id,data.approval_id,data.finish_id,data.end_date,data.step,data.category_task_id,data.department_name],function(err){
            if(err){
                result("Thêm task thất bại :( ")
            }
            else{
                result("Thêm task thành công :)")
            }
        })
    }
    else{
        db.query(query,[data.job,data.status,data.category,data.title,data.progress,data.effort,data.important,data.description,data.file,data.assignee_id,data.register_user_id,data.confirmation_id,data.implementation_id,data.test_id,data.approval_id,data.finish_id,data.end_date,data.step,data.category_task_id,data.department_name],function(err){
            if(err){
                result("Thêm task thất bại :( ")
            }
            else{
                result("Thêm task thành công :)")
            }
        })
    }
    console.log("data task", data)
}

//Update task
Task.update = function(data,file,result){
    const query_file = "UPDATE TASK SET  STATUS = ?, PROGRESS = ?, EFFORT = ?,  FILE = ?, ASSIGNEE_ID = ?,  STEP = ? WHERE TASK_ID = ?";
    const query = "UPDATE TASK SET  STATUS = ?, PROGRESS = ?, EFFORT = ?,   ASSIGNEE_ID = ?,  STEP = ? WHERE TASK_ID = ?";
    data.step = parseInt(data.step)
    data.effort = parseInt(data.effort)
    data.assignee_id = parseInt(data.assignee_id)
    data.progress = parseInt(data.progress)
    console.log("data update", data)
    if (file && file !== undefined){
        db.query(query_file,[data.status,data.progress,data.effort,file.filename,data.assignee_id,data.step,data.task_id],function(err){
            if(err){
                result("Cập nhật không thành công :(");
            }
            else{
                result("Cập nhật thành công :)");
            }
        });
    }
    else{
        db.query(query,[data.status,data.progress,data.effort,data.assignee_id,data.step,data.task_id],function(err){
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
            result("Lấy danh sách số lượng Task không thành công :(");
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
            result("Lấy danh sách số lượng employee mỗi phase không thành công :(");
        }
        else{
            result(task)
        }
    });
}

Task.get_task_todo_by_employee_id = function(data,result){
    const query =`
    SELECT DISTINCT F.TASK_ID, F.JOB, F.TITLE, F.CATEGORY_NAME, F.END_DATE, F.EMPLOYEE_ID, F.IMAGE, F.USER_NAME, task.STEP, task.DEPARTMENT_NAME, task.STATUS, 
    CASE
	    WHEN task.STEP = 1 THEN "Register"
  	    WHEN task.STEP = 2 THEN "Confirmation"
        WHEN task.STEP = 3 THEN "Implementation"
        WHEN task.STEP = 4 THEN "Test"
        WHEN task.STEP = 5 THEN "Approval"
        WHEN task.STEP = 6 THEN "Finish"
    END AS PHASE, 
    CASE
    	WHEN task.STEP = 1 AND (task.CONFIRMATION_ID = G.EMPLOYEE_ID OR task.IMPLEMENTATION_ID = G.EMPLOYEE_ID OR task.TEST_ID = G.EMPLOYEE_ID OR task.APPROVAL_ID = G.EMPLOYEE_ID OR task.FINISH_ID = G.EMPLOYEE_ID) THEN G.EMPLOYEE_ID
  	    WHEN task.STEP = 2 AND (task.IMPLEMENTATION_ID = G.EMPLOYEE_ID OR task.TEST_ID = G.EMPLOYEE_ID OR task.APPROVAL_ID = G.EMPLOYEE_ID OR task.FINISH_ID = G.EMPLOYEE_ID) THEN G.EMPLOYEE_ID
        WHEN task.STEP = 3 AND (task.TEST_ID = G.EMPLOYEE_ID OR task.APPROVAL_ID = G.EMPLOYEE_ID OR task.FINISH_ID = G.EMPLOYEE_ID) THEN G.EMPLOYEE_ID
        WHEN task.STEP = 4 AND (task.APPROVAL_ID = G.EMPLOYEE_ID OR task.FINISH_ID = G.EMPLOYEE_ID) THEN G.EMPLOYEE_ID
        WHEN task.STEP = 5 AND (task.FINISH_ID = G.EMPLOYEE_ID) THEN G.EMPLOYEE_ID
        WHEN task.STEP = 6 THEN NULL
    END AS TODO
    FROM (
        SELECT C.TASK_ID, C.JOB, C.TITLE, C.CATEGORY_NAME, C.END_DATE,C.PHASE, D.EMPLOYEE_ID, D.IMAGE, D.USER_NAME
	    FROM (
		    SELECT A.TASK_ID, A.JOB, A.TITLE, B.CATEGORY_NAME, A.END_DATE, A.STEP,
		    CASE
			    WHEN A.STEP = 1 THEN A.REGISTER_USER_ID
    		    WHEN A.STEP = 2 THEN A.CONFIRMATION_ID
        	    WHEN A.STEP = 3 THEN A.IMPLEMENTATION_ID
    		    WHEN A.STEP = 4 THEN A.TEST_ID
    		    WHEN A.STEP = 5 THEN A.APPROVAL_ID
    		    WHEN A.STEP = 6 THEN A.FINISH_ID
   			    ELSE NULL
		    END AS PHASE
		    FROM task A, category_task B
		    WHERE A.CATEGORY_TASK_ID = B.CATEGORY_TASK_ID 
        ) AS C, staff D, task E
	WHERE C.PHASE = D.EMPLOYEE_ID 
    ) AS F LEFT JOIN task ON F.TASK_ID = task.TASK_ID, staff G
    WHERE G.EMPLOYEE_ID = ?
    `;
    db.query(query, data.employee_id, function(err, task) {
        if (err) {
            result("Get failed");
        }
        else{
            task.map(item =>{
                item.IMAGE = `http://localhost:9999/get-image/${item.IMAGE}`,
                item.END_DATE = moment(item.END_DATE).format("DD/MM/YYYY")
            })
            result(task);
        }
    })
}

Task.get_task_doing_by_employee_id = function(data,result){
    const query = `
    SELECT DISTINCT F.TASK_ID, F.JOB, F.TITLE, F.CATEGORY_NAME, F.END_DATE, F.EMPLOYEE_ID, F.IMAGE, F.USER_NAME, task.STEP, task.STATUS,
    CASE
	    WHEN task.STEP = 1 THEN "Register"
  	    WHEN task.STEP = 2 THEN "Confirmation"
        WHEN task.STEP = 3 THEN "Implementation"
        WHEN task.STEP = 4 THEN "Test"
        WHEN task.STEP = 5 THEN "Approval"
        WHEN task.STEP = 6 THEN "Finish"
    END AS PHASE
    FROM (
        SELECT C.TASK_ID, C.JOB, C.TITLE, C.CATEGORY_NAME, C.END_DATE,C.PHASE, D.EMPLOYEE_ID, D.IMAGE, D.USER_NAME
	    FROM (
		    SELECT A.TASK_ID, A.JOB, A.TITLE, B.CATEGORY_NAME, A.END_DATE, A.STEP,
		    CASE
			    WHEN A.STEP = 1 THEN A.REGISTER_USER_ID
    		    WHEN A.STEP = 2 THEN A.CONFIRMATION_ID
        	    WHEN A.STEP = 3 THEN A.IMPLEMENTATION_ID
    		    WHEN A.STEP = 4 THEN A.TEST_ID
    		    WHEN A.STEP = 5 THEN A.APPROVAL_ID
    		    WHEN A.STEP = 6 THEN A.FINISH_ID
   			    ELSE NULL
		    END AS PHASE
		    FROM task A, category_task B
		    WHERE A.CATEGORY_TASK_ID = B.CATEGORY_TASK_ID 
        ) AS C, staff D, task E
	WHERE C.PHASE = D.EMPLOYEE_ID 
    ) AS F LEFT JOIN task ON F.TASK_ID = task.TASK_ID
    WHERE F.EMPLOYEE_ID = ?
    `;
    db.query(query, data.employee_id, function(err, task) {
        if (err) {
            result("Get failed");
        }
        else{
            task.map(item =>{
                item.IMAGE = `http://localhost:9999/get-image/${item.IMAGE}`,
                item.END_DATE = moment(item.END_DATE).format("DD/MM/YYYY")
            })
            result(task);
        }
    })
}

Task.get_task_done_by_employee_id = function(data,result){
    const query = `
    SELECT DISTINCT F.TASK_ID, F.JOB, F.TITLE, F.CATEGORY_NAME, F.END_DATE, F.EMPLOYEE_ID, F.IMAGE, F.USER_NAME, task.STEP, task.STATUS,
    CASE
	    WHEN task.STEP = 1 THEN "Register"
  	    WHEN task.STEP = 2 THEN "Confirmation"
        WHEN task.STEP = 3 THEN "Implementation"
        WHEN task.STEP = 4 THEN "Test"
        WHEN task.STEP = 5 THEN "Approval"
        WHEN task.STEP = 6 THEN "Finish"
    END AS PHASE,
    CASE 
    	WHEN task.STEP = 1 THEN NULL
  	    WHEN task.STEP = 2 AND (task.REGISTER_USER_ID = G.EMPLOYEE_ID) THEN G.EMPLOYEE_ID
        WHEN task.STEP = 3 AND (task.REGISTER_USER_ID = G.EMPLOYEE_ID OR task.CONFIRMATION_ID = G.EMPLOYEE_ID) THEN G.EMPLOYEE_ID
        WHEN task.STEP = 4 AND (task.REGISTER_USER_ID = G.EMPLOYEE_ID OR task.CONFIRMATION_ID = G.EMPLOYEE_ID OR task.IMPLEMENTATION_ID = G.EMPLOYEE_ID) THEN G.EMPLOYEE_ID
        WHEN task.STEP = 5 AND (task.REGISTER_USER_ID = G.EMPLOYEE_ID OR task.CONFIRMATION_ID = G.EMPLOYEE_ID OR task.IMPLEMENTATION_ID = G.EMPLOYEE_ID OR task.TEST_ID = G.EMPLOYEE_ID) THEN G.EMPLOYEE_ID
        WHEN task.STEP = 6 AND (task.REGISTER_USER_ID = G.EMPLOYEE_ID OR task.CONFIRMATION_ID = G.EMPLOYEE_ID OR task.IMPLEMENTATION_ID = G.EMPLOYEE_ID OR task.TEST_ID = G.EMPLOYEE_ID OR task.APPROVAL_ID = G.EMPLOYEE_ID) THEN G.EMPLOYEE_ID
    END AS DONE
    FROM (
        SELECT C.TASK_ID, C.JOB, C.TITLE, C.CATEGORY_NAME, C.END_DATE,C.PHASE, D.EMPLOYEE_ID, D.IMAGE, D.USER_NAME
	    FROM (
		    SELECT A.TASK_ID, A.JOB, A.TITLE, B.CATEGORY_NAME, A.END_DATE, A.STEP,
		    CASE
			    WHEN A.STEP = 1 THEN A.REGISTER_USER_ID
    		    WHEN A.STEP = 2 THEN A.CONFIRMATION_ID
        	    WHEN A.STEP = 3 THEN A.IMPLEMENTATION_ID
    		    WHEN A.STEP = 4 THEN A.TEST_ID
    		    WHEN A.STEP = 5 THEN A.APPROVAL_ID
    		    WHEN A.STEP = 6 THEN A.FINISH_ID
   			    ELSE NULL
		    END AS PHASE
		    FROM task A, category_task B
		    WHERE A.CATEGORY_TASK_ID = B.CATEGORY_TASK_ID 
        ) AS C, staff D, task E
	WHERE C.PHASE = D.EMPLOYEE_ID 
    ) AS F LEFT JOIN task ON F.TASK_ID = task.TASK_ID, staff G
    WHERE G.EMPLOYEE_ID = ?
    `;
     db.query(query, data.employee_id, function(err, task) {
        if (err) {
            result("Get failed");
        }
        else{
            task.map(item =>{
                item.IMAGE = `http://localhost:9999/get-image/${item.IMAGE}`,
                item.END_DATE = moment(item.END_DATE).format("DD/MM/YYYY")
            })
            result(task);
        }
    })
}

Task.get_count_task_by_employee_id = function(employee_id,result){
    console.log("employee_id model: ",employee_id)
    const query = `
    WITH COUNT_REGISTER AS(
            SELECT COUNT(*) AS COUNT_REGISTER
    FROM TASK A, STAFF B
    WHERE A.REGISTER_USER_ID = B.EMPLOYEE_ID
    AND B.EMPLOYEE_ID = ?
    ),
    COUNT_CONFIRMATION AS(
        SELECT COUNT(*) AS COUNT_CONFIRMATION
    FROM TASK A, STAFF B
    WHERE A.CONFIRMATION_ID = B.EMPLOYEE_ID
    AND B.EMPLOYEE_ID = ?
    ),
    COUNT_IMPLEMENTATION AS(
        SELECT COUNT(*) AS COUNT_IMPLEMENTATION
    FROM TASK A, STAFF B
    WHERE A.IMPLEMENTATION_ID  = B.EMPLOYEE_ID
    AND B.EMPLOYEE_ID = ?
    ),
    COUNT_TEST AS(
        SELECT COUNT(*) AS COUNT_TEST
    FROM TASK A, STAFF B
    WHERE A.TEST_ID = B.EMPLOYEE_ID
    AND B.EMPLOYEE_ID = ?
    ),
    COUNT_APPROVAL AS(
        SELECT COUNT(*) AS COUNT_APPROVAL
    FROM TASK A, STAFF B
    WHERE A.APPROVAL_ID  = B.EMPLOYEE_ID
    AND B.EMPLOYEE_ID = ?
    ),
    COUNT_FINISH AS(
        SELECT COUNT(*) AS COUNT_FINISH
    FROM TASK A, STAFF B
    WHERE A.FINISH_ID = B.EMPLOYEE_ID
    AND B.EMPLOYEE_ID = ?
    )
    
    SELECT A.*,B.*,C.*,D.*,E.*,F.*
    FROM COUNT_REGISTER A,COUNT_CONFIRMATION B,COUNT_IMPLEMENTATION C,COUNT_TEST D,COUNT_APPROVAL E,COUNT_FINISH F
    `;
     db.query(query, [employee_id,employee_id,employee_id,employee_id,employee_id,employee_id], function(err, task) {
        if (err) {
            result("Get failed");
        }
        else{
            result(task);
        }
    })
}

module.exports =  Task