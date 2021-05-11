const express = require("express");
const logRouter =express.Router();

function router(nav){
    logRouter.get('/',function(req,res){
        res.render("login",{
            nav,
            title:'Library'
        });
    });
    return logRouter;
}

module.exports = router;