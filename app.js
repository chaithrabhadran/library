const express = require("express");
//https://stormy-mountain-23527.herokuapp.com/userRegister

const app = new express();
const port = process.env.PORT || 1999;
global.abc=0;
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
    }
    // ,
    // {
    //     link:'/new',
    //     name:'Add New'
    // }
    
   ]

   
const authorsRouter =require('./src/routes/authorsRoutes')(nav);
const booksRouter = require('./src/routes/booksRoutes')(nav);
const logRouter = require('./src/routes/logRoutes')(nav);
const signRouter = require('./src/routes/signRoutes')(nav);
// const newRouter = require('./src/routes/newRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);
const adminsRouter = require('./src/routes/adminsRoutes')(nav);
const logoRouter = require('./src/routes/logoRoutes')(nav);



app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',logRouter);
app.use('/logout',logoRouter);

app.use('/signup',signRouter);
// app.use('/new',newRouter);
app.use('/admin',adminRouter);
app.use('/admins',adminsRouter);




app.get('/',function(req,res){
    res.render("index",
    {   nav,
        title:'Library'
    });
});





app.listen(port,()=>{console.log("server ready at "+ port)});