const fs = require('fs')
var express    = require('express');
var mysql      = require('mysql');
var dbconfig   = require('./database.js');
var connection = mysql.createConnection(dbconfig);

var app = express();
const getData = data => new Promise((resolve, reject) => {
   
    let sql = 'SELECT * from ' + data.params.table;
    if(data.query.id != 0){
        sql += ' where idx = ' + data.query.id;
    }

    connection.query(sql, function(err, rows) {
        if(err) throw err;
        err ? reject(err) : resolve(rows)
    });
})

const setData = data => new Promise((resolve, reject) => {
    console.log(path);
    fs.writeFile(path, JSON.stringify(data), 'utf-8', err => {
        err ? reject(err) : resolve()
    })
})
module.exports = {getData, setData}