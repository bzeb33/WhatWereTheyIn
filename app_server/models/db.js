var mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'bzeb33',
    password: "Marandbrad16!",
    database: "WWTIdb"
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("mysql connected");
})

module.exports = connection;
