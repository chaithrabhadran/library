const express = require("express");
const signRouter =express.Router();

function router(nav){
    signRouter.get('/',function(req,res){
        res.render("signup",{
            nav,
            title:'Library'
        });
    });
    return signRouter;
}

module.exports = router;