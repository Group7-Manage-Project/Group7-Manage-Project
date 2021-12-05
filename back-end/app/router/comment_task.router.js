const { route } = require('express/lib/router');

module.exports = function(router){
    var comment_taskController = require('../controller/comment_task.controller')

    router.get('/api/comment_task/list', comment_taskController.get_list_comment_task);
    router.get('/api/comment_task/details/:comment_task_id', comment_taskController.details_comment_task);
    router.post('/api/comment_task/insert', comment_taskController.insert_comment_task);
    router.put('/api/comment_task/update',comment_taskController.update_comment_task);
    router.delete('/api/comment_task/delete/:comment_task_id', comment_taskController.delete_comment_task);
}