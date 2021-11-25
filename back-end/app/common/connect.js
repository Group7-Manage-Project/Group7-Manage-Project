// This file only set up relate MySQL

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'GROUP8_SQL'
});


connection.connect(function(err) {
    if(err){
        console.log("Connecttion database failed !!!");
    }
    else{
        console.log("Connecttion database successful !!!");
    }
})

module.exports = connection;