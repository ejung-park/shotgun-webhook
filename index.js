// index.js

var express = require('express');
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
        const result = {success: true}
        const folder = req.body.folder // 입력 받은 폴더 정보
        try {
          const json = await db.getData() // 데이터 읽어오기
          json.folder = folder  // 데이터 수정
          await db.setData(json) // 데이터 반영
        } catch (err) {
          result.success = false
          result.err = err
        }
        res.json(result) // 결과 출력
      })

var port = process.env.PORT || 3000; //*
app.listen(port, function(){
  console.log('Server On!');
});