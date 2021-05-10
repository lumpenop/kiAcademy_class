const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors()); // 다른 포트 번호도 연결

app.get('/', (req, res)=>{
    res.json({
        success:true,
    })
})

app.listen(3000, ()=>{
    console.log('it works')
})