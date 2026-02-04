const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
app.use(bodyparser.urlencoded())
app.use(express.static(path.join(__dirname,'..','frontend')));

app.set('view engine','ejs');

mongoose.connect('mongodb://localhost:27017/todoDB');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
});

const Todo = mongoose.model('todo',todoSchema);

app.get('/',async (req,res)=>{
    const todo = await Todo.find();
    res.render('index.ejs',{todo});
});

app.post('/submit',async(req,res)=>{
    const todo = req.body.title;
    await Todo.create(
        {title:todo}
    )
    console.log(Todo.find())
    res.redirect('/');
});

app.post('/submit/delete', async (req,res)=>{
    await Todo.deleteOne({_id:req.body.id});
    res.redirect('/');
});

app.listen(3000,()=>{
    console.log('http://localhost:3000');
})