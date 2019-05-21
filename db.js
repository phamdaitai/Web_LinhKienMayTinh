var lowdb = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');
db = lowdb(adapter);

db.defaults({users:[]})
    .write();

db.defaults({products:[]})
    .write();

db.defaults({admins:[]})
    .write();
    
module.exports = db;