const express = require('express');
const app = express();
const {sequelize, User} = require('./models');
const nunjucks = require('nunjucks');
const indexRouter = require('./routes')


app.set('view engine', 'html');

nunjucks.configure('views',{
    express: app,
})

/*
 force : 접속 시 테이블 존재 여부에 따라서 새로운 테이블 생성 결정
 force : true => 새로운 테이블 생성
*/
sequelize.sync({force:false,}) //sync : new Promise 객체
.then(()=>{ // 성공, resolve
    console.log('db 접속 완료')
})
.catch(()=>{ // 실패, reject
    console.log('db접속 실패')
})


// app.get('/', async (req, res)=>{ // async로 동기식 처리
//     // User.create({  // user.js에서 User클래스가 Sequelize.Model을 상속받았기 때문에 create메소드 사용 가능
//     //     name:'zero',
//     //     age:24,
//     //     married:false,
//     //     comment:'자기소개1'
//     // })
//     const userList = await User.findAll({}); // promise 객체로 받는 비동기 처리를 동기식으로 사용
    
//     console.log(userList);
//     res.send("hello");

// })

app.use('/',indexRouter );

// 주소가 '/' 일 때

app.listen(3000, ()=>{
    console.log('server start port: 3000');
})