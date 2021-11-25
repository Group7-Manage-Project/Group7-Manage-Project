const multer = require("multer");
const fs = require('fs')
const stream = require('stream')


// Storage Engin That Tells/Configures Multer for where (destination) and how (filename) to save/upload our files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./image"); //important this is a direct path fron our current file to storage location
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const upload = multer({ storage: storage});


module.exports = function(router) {
    var staffController = require('../controller/staff.controller')

    router.get('/api/staff/list',staffController.get_list_employee);
    router.get('/api/staff/list-name-image',staffController.get_list_employee_name_image);
    router.get('/api/staff/detail/:employee_id', staffController.details_employee);
    router.post('/api/staff/insert' , upload.single('image'),staffController.insert_employee);
    router.put('/api/staff/update',upload.single('image') ,staffController.update_employee);
    router.delete('/api/staff/delete/:employee_id',staffController.delete_employee);
    router.put('/api/staff/delete-flag',staffController.delete_employee_flg);
    router.post('/api/staff/login', staffController.login_employee);

    
    router.get('/get-image/:image',(req, res) => {
      const r = fs.createReadStream(`./image/${req.params.image}`) // or any other way to get a readable stream
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

