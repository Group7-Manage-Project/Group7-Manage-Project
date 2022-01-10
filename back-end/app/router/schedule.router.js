module.exports = function(router){
    var scheduleController = require('../controller/schedule.controller');

    router.get('/api/schedule/list', scheduleController.get_list_schedules);
    router.get('/api/schedule/detail/:employee_id', scheduleController.detail_schedule);
    router.post('/api/schedule/insert', scheduleController.insert_schedule);
    router.put('/api/schedule/update', scheduleController.update_schedule);
    router.delete('/api/schedule/delete/:IdSchedule', scheduleController.delete_schedule);
}