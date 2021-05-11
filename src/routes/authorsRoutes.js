const express =require("express");
const authorsRouter = express.Router();

function  router(nav){
    var authors= [
        {
            author: 'Joseph Barbera',
            book: 'Tom and Jerry',
            genre: 'Cartoon',
            img: "jo.jpg"
    
        },
        {
            author: 'J K Rowling',
            book: 'Harry Potter',
            genre: 'Fantasy',
            img: "rowling.jfif"
        },
        {
            author: 'Basheer',
            book: 'Pathumayude Aadu',
            genre: 'Drama',
            img: "basheer.jpg"
        }
    ]
    authorsRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
            title:'Library',
            authors
        });
    });
    
    authorsRouter.get('/:id',function(req,res){
      const id= req.params.id;
        res.render("author",{
            nav,
            title:'Library',
            author:authors[id]
        });
    });
   return authorsRouter; 
}

module.exports = router;



