// This file only set up relate MySQL

var mysql = require('mysql');

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'group7_sql'
// });
var connection = mysql.createConnection({
    host: 'buqqnotrtb0rzfscllux-mysql.services.clever-cloud.com',
    user: 'ubvbxneuwditohox',
    password: 'vaVzlqgsEWeOEYYQwZ1Q',
    database: 'buqqnotrtb0rzfscllux'
});

connection.connect(function(err) {
    if(err){
        console.log(err);
        console.log("Connecttion database failed !!!");
    }
    else{
        console.log("Connecttion database successful !!!");
    }
})

module.exports = connection;