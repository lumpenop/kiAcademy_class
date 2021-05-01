const express = require('express');
const app  = express();
const mysql = require('./dbconn.js');


app.get('/', (req, res)=>{
    mysql((err, connection)=>{
        if(!err){
            connection.query('select * from board',(error, results)=>{
                console.log(results);
            })
        }
    })
})


app.listen(3000, ()=>{
    console.log('it works!')
})