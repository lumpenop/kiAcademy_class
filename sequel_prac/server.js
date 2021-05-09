const express = require('express');
const {sequelize} = require('./models'); // 객체
// {sequelize}로 작성 시 const sequelize = require('./models').sequelize 랑 같다
// -> models에서 작성한 const sequelize 를 가져옴
const app = express();


// sequelize.sync -> new Promise 객체로 반환
sequelize.sync({force:false,})
.then(()=>{
    console.log('접속 성공');
})
.catch(()=>{
    console.log('접속 실패');
})

app.get('/', (req, res)=>{
    res.send('hi');
})

app.listen(3000, ()=>{
    console.log("it works");
})