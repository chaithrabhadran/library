const express = require("express");
const signRouter =express.Router();
// const alert= require('alert');

// const express = require("express");
// const router = express.Router();y
const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

const User = require("../model/user");



function router(nav){
    signRouter.get('/',function(req,res){
        res.render("signup",{
            nav,
            title:'Library'
        });
    });

    signRouter.post('/auth',function(req,res){
        var email= req.body.email;
        var password= req.body.password;

        User.findOne({email:email,password:password},function(err,user){
            if(err){throw(err);
                console.log(err);
                
                return res.status(500).send();
            }
            if(!user){
                res.redirect('/login');
                // alert("asd");
                return res.status(404).send();
            }
            abc=1;
            nav.pop();
            nav.pop();
            nav.push( {
                link:'/admin',
                name:'Add Book'
            },{
                link:'/admins',
                name:'Add Author'
            },{
                link:'/logout',
                name:'Logout'
            });
        
            res.redirect('/');
            return res.status(200).send();
        })
    })

signRouter.post('/register',function(req,res){
    var name=req.body.name;
    var email=req.body.email;
    var phone=req.body.phone;
    var password=req.body.password;
    var cpassword=req.body.cpassword;


    var newuser =new User();
    newuser.name=name;
    newuser.email=email;
    newuser.phone=phone;
    newuser.password=password;
    newuser.cpassword=cpassword;

    newuser.save(
        function(err,savedUser){
if(err){
    console.log(err);
    return res.status(500).send();
}
return res.status(200).send();
    });
    res.redirect('/login');

});


    return signRouter;


}


module.exports = router;