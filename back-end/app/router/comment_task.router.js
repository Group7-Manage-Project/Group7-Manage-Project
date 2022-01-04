const { route } = require('express/lib/router');

const multer = require("multer");

// chỗ này dùng để tạo một store, file được user gửi, nó sẽ nằm trong folder file
const storageFile = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./file"); //important this is a direct path fron our current file to storage location
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "--" + file.originalname);
    },
  });
  
const upload = multer({ storage: storageFile});

module.exports = function(router){
    var comment_taskController = require('../controller/comment_task.controller')

    router.post('/api/comment_task/list', comment_taskController.get_list_comment_task);
    router.get('/api/comment_task/details/:comment_task_id', comment_taskController.details_comment_task);
    router.post('/api/comment_task/insert', upload.single('file'),comment_taskController.insert_comment_task);
    router.put('/api/comment_task/update',comment_taskController.update_comment_task);
    router.delete('/api/comment_task/delete/:comment_task_id', comment_taskController.delete_comment_task);
}