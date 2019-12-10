const express = require('express');
const db = require('./data/db.js');
const PORT = process.env.PORT;
const app = express();

app.use(express.json())  // request body를 사용하기 위함
app.use(express.static('public')) // static file을 사용하기 위함
app.listen(PORT)


// routing
app.route('/api/tasks')
    .get(async (req, res) => {
        const result = {success: true}
        var args = req;
        try {
           console.log(args);
        } catch (err) {
            result.success = false
            result.err = err
        }
        res.json(args)
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
    


// task
app.route('/api/task/:parent')
  .get(async (req, res) => {
    const result = {success: true}
    const parent = req.params.parent
    try {
      const json = await db.getData()
      list = []
      json.task.forEach((v, idx) => { // 모든 task data를 가져옵니다.
        if (v.parent === parent) { // 주소의 parent와 일치하면
          v.idx = idx // idx도 같이 지정해주고
          list.push(v) // list에 push해줍니다.
        }
      })
      result.data = list // 검열된 data를 결과로 반환합니다.
    } catch (err) {
      result.success = false
      result.err = err
    }
    res.json(result)
  })
  .post(async (req, res) => {
    const result = {success: true}
    const task = req.body.task
    const parent = req.params.parent
    try {
      const json = await db.getData() 
      task.parent = parent // 부모값을 지정하여 추가한다.
      json.task.push(task) // task를 새로 추가하고
      await db.setData(json) // 업데이트 합니다.
    } catch (err) {
      result.success = false
      result.err = err
    }
    res.json(result)
  })
  .put(async (req, res) => {
    const result = {success: true}
    const task = req.body.task
    const idx = req.params.parent
    try {
      const json = await db.getData()
      json.task[idx] = task // 지정한 task를 수정 후
      await db.setData(json) // 업데이트 합니다.
    } catch (err) {
      result.success = false
      result.err = err
    }
    res.json(result)
  })
