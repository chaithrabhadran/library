const express = require("express");

const app = new express();
const port = process.env.PORT || 1999;

const nav = [
    {
        link:'/books',
        name:'Books'
    },
    {
        link:'/authors',
        name:'Authors'
    },
    {
        link:'/login',
        name:'Login'
    },
    {
        link:'/signup',
        name: 'Signup'
    },
    {
        link:'/new',
        name:'Add New'
    }]
const authorsRouter =require('./src/routes/authorsRoutes')(nav);
const booksRouter = require('./src/routes/booksRoutes')(nav);
const logRouter = require('./src/routes/logRoutes')(nav);
const signRouter = require('./src/routes/signRoutes')(nav);
const newRouter = require('./src/routes/newRoutes')(nav);

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',logRouter);
app.use('/signup',signRouter);
app.use('/new',newRouter);



app.get('/',function(req,res){
    res.render("index",
    {   nav,
        title:'Library'
    });
});





app.listen(port,()=>{console.log("server ready at "+ port)});