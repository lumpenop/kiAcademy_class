const mysql = require('mysql');
const config = {
    host:'localhost',
    user: 'root',
    password: '1234',
    datavase: 'homepage',
}

const pool = mysql.createPool(config);

let getConnection = function(callback){
    pool.getConnection((err, connection)=>{ // 사용하고자 하는 영역에서만 연결을 하겠다, 3번째 인자값은 field
        callback(err, connection);
        if(err) throw err; console.log('pool conn err');
        connection.query('select * from board',(error, results)=>{
            connection.release();
            if(error) throw err;
            console.log(results);
        });
    })
}

module.exports = getConnection; // getConnection함수를 준다

