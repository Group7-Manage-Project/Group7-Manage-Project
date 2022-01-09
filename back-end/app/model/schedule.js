const db = require('../common/connect');
const moment =  require('moment');

const Schedule = function (schedule) {
    this.Id = schedule.Id;
    this.department_name = schedule.department_name;
    this.IsAllDay = schedule.IsAllDay;
    this.EndTime = schedule.EndTime;
    this.Subject = schedule.Subject;
    this.Description = schedule.Description;
    this.Location = schedule.Location;
    this.RecurrenceRule = schedule.RecurrenceRule;
    this.StartTimezone = schedule.StartTimezone;
    this.EndTimezone = schedule.EndTimezone;
    this.EMPLOYEE_ID  = schedule.EMPLOYEE_ID ;
}

Schedule.list = function (result){
    const query = "SELECT *, Id as IdSchedule FROM SCHEDULE"
    db.query(query, function(err,schedule){
        if (err){
            result("Get list failed");
        }
        else{
            schedule.map(item =>{
                // item.StartTime =  moment(item.StartTime).format("YYYY , MM , DD , HH , MM ")
                //  item.EndTime = moment(item.EndTime).format("YYYY , MM , DD , HH , MM ")
                item.StartTime = new Date(item.StartTime)
                item.EndTime = new Date(item.EndTime)
                item.IsAllDay && item.IsAllDay === 1 ? item.IsAllDay = true : item.IsAllDay = false
            })
            console.log("list schedule: ", schedule)
            result(schedule);
        }
    })
}

Schedule.details = function (employee_id, result){
    const query = "SELECT *, Id as IdSchedule FROM SCHEDULE WHERE EMPLOYEE_ID = ?";
    db.query(query, employee_id, function (err, schedule){
        if (err || Schedule.length == 0){
            result("Get details failed");
        }
        else {
            result(schedule);
        }
    })
}

Schedule.create = function (data, result){
    const query = "INSERT INTO SCHEDULE (IsAllDay,StartTime,EndTime,Subject,Description,Location,RecurrenceRule,StartTimezone,EndTimezone,EMPLOYEE_ID) VALUES (?,?,?,?,?,?,?,?,?,?)";
    db.query(query, [data.IsAllDay,data.StartTime,data.EndTime,data.Subject,data.Description,data.Location,data.RecurrenceRule,data.StartTimezone,data.EndTimezone,data.EMPLOYEE_ID], function(err){
        console.log("schedule data: ", data)
        if (err) {
            result("Insert failed");
        }
        else {
            result("Insert successfully");
        }
    })
}

Schedule.update = function (data, result){
    const query= "UPDATE SCHEDULE SET IsAllDay = ?, StartTime = ?, EndTime=? ,Subject =  ?, Description = ?, Location = ? , RecurrenceRule = ?, StartTimezone=?, EndTimezone=?,EMPLOYEE_ID = ?  WHERE Id = ?";
    console.log("data update schedule: ",data)
    db.query(query, [data.IsAllDay,data.StartTime,data.EndTime,data.Subject,data.Description,data.Location,data.RecurrenceRule,data.StartTimezone,data.EndTimezone,data.EMPLOYEE_ID, data.IdSchedule], function(err){
        if (err){
            result("update failed");
        }
        else{
            result("update successfully");
        }
    })
}

Schedule.delete = function (IdSchedule, result){
    const query = "DELETE FROM SCHEDULE WHERE Id = ?";
    db.query(query, IdSchedule, function(err){
        if (err){
            result("delete failed");
        }
        else{
            result("delete successfully");
        }
    })
}


module.exports = Schedule;