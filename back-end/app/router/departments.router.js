module.exports = function(router){
    var departmentsController = require('../controller/departments.controller');

    router.get('/api/departments/list', departmentsController.get_list_departments);
    router.get('/api/departments/detail/:department_id', departmentsController.detail_department);
    router.post('/api/departments/insert', departmentsController.insert_department);
    router.put('/api/departments/update', departmentsController.update_department);
    router.delete('/api/departments/delete/:department_id', departmentsController.delete_department);
    router.get('/api/departments/depart_cate', departmentsController.get_tree_depart_cate);
    router.get('/api/departments/get/list/tree', departmentsController.get_list_department_tree);
}