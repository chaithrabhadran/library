const express = require("express");
const adminsRouter =express.Router();
const Authordata = require('../model/Authordata');

function router(nav){
    adminsRouter.get('/',function(req,res){
        res.render("addAuthor",{
            nav,
            title:'Library'
        });
    });
    adminsRouter.post('/adds',function(req,res){
      var item = { 
       author: req.body.author,
      book:  req.body.book,
       genre: req.body.genre,
       image: req.body.image
    }

    var author = Authordata(item);
    author.save();
    res.redirect('/authors');


    });

   
    return adminsRouter;
}

module.exports = router;