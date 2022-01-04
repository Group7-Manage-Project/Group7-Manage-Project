const db = require('../common/connect');
const jwt = require('jsonwebtoken');
const moment =  require('moment');

const Staff = function(staff) {
    this.employee_id = staff.employee_id;
    this.full_name = staff.full_name;
    this.user_name = staff.user_name;
    this.password = staff.password;
    this.birth_day = staff.birth_day;
    this.email = staff.email;
    this.image = staff.image;
    this.position = staff.position;
    this.roll = staff.roll;
    this.delete_flag = staff.delete_flag;
}

Staff.list = function(result) {
    const query = "SELECT * FROM STAFF";
    db.query(query, function(err, staff){
        if(err){
            result("Lấy danh sách Staff không thành công :(");
        }
        else{
            staff.map(item =>{
                // console.log("image",item.IMAGE)
                item.IMAGE = `http://localhost:9999/get-image/${item.IMAGE}`;
                item.BIRTH_DAY = moment(item.BIRTH_DAY).format("DD/MM/YYYY")
                // console.log(item.BIRTH_DAY)
            })
            // console.log("staff",staff)
            result(staff)
        }
    });
}

Staff.list_name_image = function(result) {
    const query = "SELECT FULL_NAME,IMAGE AS IMAGE_URL, EMPLOYEE_ID,IMAGE FROM STAFF";
    db.query(query, function(err, staff){
        if(err){
            result("Lấy danh sách Staff không thành công :(");
        }
        else{
            staff.map(item =>{
                // console.log("image",item.IMAGE)
                item.IMAGE_URL = `http://localhost:9999/get-image/${item.IMAGE}`;
                // console.log(item.IMAGE)
            })
            // console.log("staff",staff)
            result(staff)
        }
    });
}

Staff.detail = function(employee_id,result) {
    const query = "SELECT * FROM STAFF WHERE EMPLOYEE_ID = ?";
    db.query(query,employee_id,function(err, staff){
        if(err || staff.length == 0){
            result("Không có nhân viên cần tìm");
        }
        else{
            staff.map(item =>{
                // console.log("image",item.IMAGE)
                item.IMAGE = `http://localhost:9999/get-image/${item.IMAGE}`
            })
            // console.log("staff",staff)
            // result(staff)
            result(staff[0]);
        }
    })
}

Staff.create = function(data,file,result){
    const query = "INSERT INTO STAFF (FULL_NAME,USER_NAME,PASSWORD,BIRTH_DAY,EMAIL,IMAGE,POSITION,ROLL,DELETE_FLAG) VALUES(?,?,?,?,?,?,?,?,?)";
    if(file !== undefined){
        db.query(query, [data.full_name, data.user_name, data.password, data.birth_day, data.email, file.filename, data.position, data.roll, data.delete_flag],function(err){
            if(err || file === undefined){
                result("Đăng ký thất bại :(");
            }
            else{
                result("Đăng ký thành công :)");
            }
        })
    }
    else{
        result("Đăng ký thất bại :(");
    }

}

Staff.update = function(data,file,result){
    const query_file = "UPDATE STAFF SET FULL_NAME= ? , USER_NAME = ? , PASSWORD = ? , BIRTH_DAY = ? , EMAIL= ? , IMAGE = ? , POSITION = ? , ROLL= ?, DELETE_FLAG = ?  WHERE EMPLOYEE_ID = ? ";
    const query = "UPDATE STAFF SET FULL_NAME= ? , USER_NAME = ? , PASSWORD = ? , BIRTH_DAY = ? , EMAIL= ? , POSITION = ? , ROLL= ?, DELETE_FLAG = ?  WHERE EMPLOYEE_ID = ? "
    console.log("data update employee", data)
    if(file && file !== undefined){
        db.query(query_file,[data.full_name, data.user_name, data.password, data.birth_day, data.email, file.filename, data.position, data.roll, data.delete_flag,data.employee_id],function(err){
            if(err){
                result("Cập nhật không thành công :(");
            }
            else{
                result("Cập nhật thành công :)");
            }
        });
    }
    else{
        db.query(query,[data.full_name, data.user_name, data.password, data.birth_day, data.email, data.position, data.roll, data.delete_flag,data.employee_id],function(err){
            if(err){
                result("Cập nhật không thành công :(");
            }
            else{
                result("Cập nhật thành công :)");
            }
        });
    }
}

Staff.delete = function(employee_id,result){
    const query = "DELETE FROM STAFF WHERE EMPLOYEE_ID = ?"
    db.query(query,employee_id,function(err){
        if(err){
            result("Xóa nhân viên không thành công :)");
        }
        else{
            result("Xóa nhân viên thành công :)");
        }
    })
}

Staff.delete_flg = function(data,result){
    const query = "UPDATE STAFF SET DELETE_FLAG = ? WHERE EMPLOYEE_ID = ? ";
    db.query(query,[data.delete_flag, data.employee_id],function(err){
        if(err){
            result("Chuyển cờ không thành công :(");
        }
        else{
            result("Chuyển cờ thành công  :)");
        }
    });
}

Staff.login = function(data,result){
    const query = "SELECT EMPLOYEE_ID,USER_NAME,ROLL,FULL_NAME,IMAGE FROM STAFF WHERE USER_NAME = ? AND PASSWORD = ?";
    console.log("data user", data)
    db.query(query,[data.user_name, data.password], function(err,staff){
        if(staff.length > 0){
            // let token = jwt.sign({staff},'team7project@uef.edu.vn',{algorithm:'HS256',expiresIn:'3h'})\
            let token = jwt.sign({staff},'team7project@uef.edu.vn',{algorithm:'HS256',expiresIn:'1 days'})
            console.log("staff",staff);
            result({access_token:token,staff:staff});
        }
        else{
            result("Đăng nhập thất bại");
        }
    });
}

module.exports = Staff;