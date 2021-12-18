module.exports = function(router){
    var category_taskController = require('../controller/category_task.controller')

    router.get('/api/category_task/list', category_taskController.get_list_category_task);
    router.get('/api/category_task/detail/:category_task_id', category_taskController.details_category_task);
    router.post('/api/category_task/insert', category_taskController.insert_category_task);
    router.put('/api/category_task/update', category_taskController.update_category_task);
    router.delete('/api/category_task/delete/:category_task_id', category_taskController.delete_category_task);
    router.put('/api/category_task/delete-flaf', category_taskController.delete_category_task_flg);
    router.get('/api/category_task/catetask', category_taskController.get_tree_cate_task);
}