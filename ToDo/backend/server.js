const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyparser.urlencoded())
app.use(express.static(path.join(__dirname, '..', 'frontend')));

app.set('view engine','ejs');


let todos = [];

app.get('/',(req,res)=>{
    res.render('index.ejs',{todos});
});

app.post('/submit',(req,res)=>{
    const todo = req.body.title;
    todos.push(todo)
    console.log(todos)
    res.redirect('/');
});
app.post('/submit/delete',(req,res)=>{
    let index = req.body.index;
    todos.splice(index,1);
    res.redirect('/');
})

app.listen(3000,()=>{
    console.log('http://localhost:3000');
})