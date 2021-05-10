const {User} = require('../../models/index');
// model 연결, models/index의 User 클래스 데이터만 가져옴

const sequelize = require('sequelize');

// html 경로 작성 시 
// server.js의 nunjucks.configure에 설정한 경로에서 시작

let join = (req, res) =>{
    res.render('./user/join.html');
}

let login = (req, res)=>{
    res.render('./user/join.hmtl');
}

let info = async (req, res)=>{
    let userList = await User.findAll({
        attributes: [
            'user_id','user_image', 'user_name',
            [sequelize.fn('date_format', sequelize.col('user_dt'), '%Y-%m-%d'), 'formed_date']
        ]})
        .then(function(result) {
          return result
        });

        res.json({
            userList,
        })

    // let userList = await User.findAll({})

    // res.render('./user/info.html',{
    //     userId: userList[0].dataValues.user_id,
    //     userImg: userList[0].dataValues.user_image,
    //     date: userList[0].dataValues.formed_date,
    // });
}

let user = (req, res)=>{
    res.render('./user/index.html');
}

module.exports = {
    join: join,
    login: login,
    info: info,
    user: user,
}