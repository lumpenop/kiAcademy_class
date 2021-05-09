const express = require('express');
const {sequelize} = require('./models'); // 객체
// {sequelize}로 작성 시 const sequelize = require('./models').sequelize 랑 같다
// -> models에서 작성한 const sequelize 를 가져옴

const {User} = require('./models');
const app = express();

const router = require('./routes/index');
const nunjucks = require('nunjucks');

app.set('view engine', 'html');

nunjucks.configure('views',{
    express: app,

})

// sequelize.sync -> new Promise 객체로 반환
sequelize.sync({force:false,})
.then(()=>{
    console.log('접속 성공');
})
.catch(()=>{
    console.log('접속 실패');
})




app.use('/', router);

app.get('/', async (req, res)=>{
    // User.create({   // user.js에서 상속받은 Sequelize.Model의 메소드
    //     user_id:'web77223',
    //     user_pw:'1234',
    //     user_name:'zero',
    //     gender:true,
    //     user_image:'no image',
    // })  

    // let userList = User.findAll({})
    // .then((result)=>{
    //     console.log(result);
    // })
    // .catch((error)=>{
    //     console.log(error);
    // })
    
    // let userList = await User.findAll({});
    // console.log(userList);

    // User.update({
    //     user_pw:'12345',
    //     user_name:'zero2',
    //     gender:false
    // },{             // where절은 새로운 객체로 넣어줘야 함
    //     where:{ id : 1}
    // })

    // let result = await User.update({
    //     user_pw: '12345',
    //     user_name: 'zero3',
    //     gender: true,
    // },{
    //     where:{id:1},
    // })

    // User.destroy({
    //     where:{id:5},
    // })

    res.send('hi');
})

app.listen(3000, ()=>{
    console.log("it works");
})