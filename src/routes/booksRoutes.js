const express = require("express");

const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav) {
 


    booksRouter.get('/', function (req, res) {
        Bookdata.find()
            .then(function (books) {
                res.render("books",
                    {
                        nav,
                        title: 'Library',
                        books
                    });
            })

    });

    booksRouter.get('/:id', function (req, res) {
        const id = req.params.id;
        Bookdata.findOne({ _id: id })
            .then(function (book) {
                res.render("book", {
                    nav,
                    title: 'Library',
                    book,
                    success:""
                });
            })

    });
    //---------------------------NEW
    booksRouter.get('/:id/delete', function (req, res) {
        const id = req.params.id;
        console.log(id);
        Bookdata.remove({ _id: id}).then(function () {
            res.redirect("/books");
        })

    });
    booksRouter.get('/:id/update',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({ _id: id })
            .then(function (book) {
                res.render("addb", {
                    nav,
                    title: 'Library',
                    book
                });
            })
    })
    booksRouter.post('/:id/edit',function(req,res){
        const id = req.params.id;
        const item={
            title:req.body.title,
            author:req.body.author,
            genre:req.body.genre,
            image:req.body.image};
        Bookdata.updateOne({ _id: id },{$set:item},function () {

                res.redirect("/books");
            })
    })

    
    //-----------------------------NEW


    return booksRouter;
}



module.exports = router;