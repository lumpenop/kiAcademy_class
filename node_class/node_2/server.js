const express = require('express');
const nunjucks = require('nunjucks');

const app = express();
app.use(express.urlencoded());



nunjucks.configure('views', {
    express:app,
    autoescape:true
});

app.set('view engine', 'html')

app.get('/', (요청, 응답)=>{
    응답.render('index.html', {
        name:요청.query.name,
        id:요청.query.id,
        password:요청.query.password
    })
})

app.post('/', (요청, 응답)=>{
    console.log(요청.body)
})

app.listen(3000, ()=>{
    console.log('server is listening at localhost:3000')
})