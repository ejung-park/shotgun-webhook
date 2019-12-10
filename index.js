// index.js
var express = require('express');
var pg = require('pg');
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
      var con = "postgres://nrwxoqndcmnssw:50a27b4a4e5419b5da3d0ecd074d62235b0f536c8a33841456a2c3ee14c2ba1d@ec2-23-21-148-223.compute-1.amazonaws.com:5432/d7v4ta77be36ns";
      pg.connect(con, function (err, client) {
          var qstr = "insert into sg_data (data) values($data);";
          var query = client.query(qstr, [req.body]);
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

var port = process.env.PORT || 3000; //*
app.listen(port, function(){
  console.log('Server On!');
});