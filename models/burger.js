//import ORM
var orm = require('../config/orm.js');

//code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    all: function(cb) {
        orm.all('burgers', function(res){
            cb(res)
        });
    },
    create: function(name,cb) {
        orm.create('burgers', ['burger_name', 'devoured'], [name, false], cb);
    },
    update: function(id, cb) {
        var condition = 'id=' + id;
        orm.update('burgers', {devoured : true}, condition, cb);
    }
};

//export burger
module.exports = burger;