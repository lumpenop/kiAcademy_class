const express = require('express');
const app  = express();
const mysql = require('./dbconn.js');


app.get('/', (req, res)=>{
    mysql((err, connection)=>{
        if(!err){
            
            
            
            connection.query('select * from board',(error, results)=>{
                connection.release();
                if(error)console.log(error);
                
                else{
                    console.log(results);
                    res.send('hi')
                }
                
            })
        }else{
            console.log('connection error', err)
        }
    })
})


app.listen(3000, ()=>{
    console.log('it works!')
})