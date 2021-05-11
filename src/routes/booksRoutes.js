const express = require("express");

const booksRouter = express.Router();
function router(nav){
    var books = [
        {
            title: 'Tom and Jerry',
            author: 'Joseph Barbera',
            genre: 'Cartoon',
            img: "tom.png"
        },
        {
            title: 'Harry Potter',
            author: 'J K Rowling',
            genre: 'Fantasy',
            img: "hp.jfif"
        },
        {
            title: 'Pathumayude Aadu',
            author: 'Basheer',
            genre: 'Drama',
            img: "pa.jfif"
        }
    ]
    
    
    booksRouter.get('/',function(req,res){
        res.render("books",
        {   nav,
            title:'Library',
            books
        });
    });
    booksRouter.get('/:id',function(req,res){
       const id = req.params.id;
        res.render("book",{
            nav,
            title:'Library' ,
            book:books[id]
        });
    });
    return booksRouter;
}



module.exports =router;