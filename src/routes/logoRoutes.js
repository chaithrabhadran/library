const express = require("express");
const logoRouter =express.Router();

function router(nav){
    logoRouter.get('/',function(req,res){
        nav.pop();
        nav.pop();
        nav.pop();
        nav.push( {
            link:'/login',
            name:'Login'
        },{
            link:'/signup',
            name:'SignUp'
        })
        abc=0;
        res.redirect('/');
    });
    return logoRouter;
}

module.exports = router;