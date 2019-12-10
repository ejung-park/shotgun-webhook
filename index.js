// index.js
var express = require('express');
var router = require('router');
var pg = require('pg');
var {Pool} = require('pg');
var app = express();

// routing
app.route('/api/folder')
    .get(async (req, res) => {
        const result = {success: true}
        try {
            const json = await db.getData()
            result.data = json
        } catch (err) {
            result.success = false
            result.err = err
        }
        res.json(result)
    })
    .post(async (req, res) => {
      //var con = "postgres://nrwxoqndcmnssw:50a27b4a4e5419b5da3d0ecd074d62235b0f536c8a33841456a2c3ee14c2ba1d@ec2-23-21-148-223.compute-1.amazonaws.com:5432/d7v4ta77be36ns";
      var con = new pg.Client({
        user: "nrwxoqndcmnssw",
        password: "50a27b4a4e5419b5da3d0ecd074d62235b0f536c8a33841456a2c3ee14c2ba1d",
        database: "d7v4ta77be36ns",
        port: 5432,
        host: "ec2-23-21-148-223.compute-1.amazonaws.com",
        ssl: true
    }); 
     
      con.connect(function(err, client, done) {

        if (err) {
          console.log("not able to get connection " + err);
          res.status(400).send(err);
      }

          var qstr = "insert into sg_data (idx, data) values(1,'"+req+"');";
          var query = client.query(qstr);
         
      });
      })

var port = process.env.PORT || 3000; //*
app.listen(port, function(){
  console.log('Server On!');
});