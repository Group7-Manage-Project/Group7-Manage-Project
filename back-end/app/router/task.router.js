const multer = require("multer");
const fs = require('fs')
const stream = require('stream')

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
    var taskController = require('../controller/task.controller')

    router.get('/api/task/list', taskController.get_list_task)
    router.get('/api/task/detail/:task_id', taskController.details_task)
    router.post('/api/task/insert', upload.single('file'), taskController.insert_task) 
    router.put('/api/task/update', upload.single('file'), taskController.update_task)
    // router.delete('/api/task/delete/:task_id',taskController.delete_task)
    router.get('/api/task/count/category', taskController.count_task_category)
    router.get('/api/task/count/employee-phase', taskController.count_employees_phase)

    // chỗ này dùng để xuất ra file, chỉ cần /get-file/tên-file 
    router.get('/get-file/:file',(req, res) => {
        const r = fs.createReadStream(`./file/${req.params.file}`) // or any other way to get a readable stream
        const ps = new stream.PassThrough() // <---- this makes a trick with stream error handling
        stream.pipeline(r,ps, // <---- this makes a trick with stream error handling
            (err) => {
          if (err) {
            console.log(err) // No such file or any other kind of error
            return res.sendStatus(400); 
          }
        })
        ps.pipe(res) // <---- this makes a trick with stream error handling
      })
}