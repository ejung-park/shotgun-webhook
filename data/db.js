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
    var con = "postgres://nrwxoqndcmnssw:50a27b4a4e5419b5da3d0ecd074d62235b0f536c8a33841456a2c3ee14c2ba1d@ec2-23-21-148-223.compute-1.amazonaws.com:5432/d7v4ta77be36ns";
    pg.connect(con, function (err, client) {
        var qstr = "insert into sg_data (data) values('"+data+"');";
        var query = client.query(qstr, [name_str, mail_str, memo_str]);
        query.on('end', function (row, err) {
            response.redirect("/");
        });
        query.on('error', function (error) {
            console.log("ERROR!");
            response.render('index', {
                title: "ERROR",
                data: null,
                message: "ERROR is occured!"
            });
        });
    });

})
module.exports = {getData, setData}