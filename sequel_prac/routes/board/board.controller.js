const {User}  = require('../../modles');

let list = async (req, res)=>{
    //select
    // let userList = await User.findAll({

    // });
    res.render('list.html');
}

let write = async (req, res)=>{
    // insert
    // let rst = await User.create({

    // })
    res.render('write.html');
}
let view = async (req, res)=>{
    res.render('view.html');
}
let modify = async (req, res)=>{
    // update
    // let rst = await User.update({

    // },{
    //     where: {} // 필드 : 값
    // })   
    res.render('modify.html');
}

module.exports = {
    list:list,
    view:view,
    modify:modify,
    write:write,
}
