// set up file to connect to Node to MySql && export connection
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'alphasquad',
    database: 'burgersSequelized_db'
});


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

//export connection
module.exports = connection;


var sequelize = new Sequelize("database", username, password, {
    host: "localhost",
    dialect: "mysql",
    logging: function () {},
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    dialectOptions: {
        socketPath: "/var/run/mysqld/mysqld.sock"
    },
    define: {
        paranoid: true
    }
});



