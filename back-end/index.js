/* Set up express  */

var express = require('express');
// var path = require('path');
var app = express();


const cors = require("cors"); // connect local http


/* Set up express  */

/* Config body-parser */

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());
app.use(cors());
// app.use(fileUpload()); //upload img
// app.use(express.static(path.join(__dirname, 'image')));

/* /Config body-parser */


/* Router */
require('./app/router/staff.router')(app);
require('./app/router/task.router')(app);
require('./app/router/category_task.router')(app);
require('./app/router/comment_task.router')(app);
require('./app/router/departments.router')(app);

/* /Router */

/* Run port in local */
app.listen(9999,function(){
    console.log("Sever listening on http://localhost:9999/")
})

/* Run port in local */

