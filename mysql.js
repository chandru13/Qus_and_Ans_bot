const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "qus_ans_bot"
});

conn.connect(function(err){
	if (err) throw err;
	console.log('MySQL Connected');
});

module.exports = conn;
