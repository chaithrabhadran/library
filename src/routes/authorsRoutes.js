const express = require("express");

const authorsRouter = express.Router();
const Authordata = require('../model/Authordata');
function router(nav) {



    authorsRouter.get('/', function (req, res) {
        Authordata.find()
            .then(function (authors) {
                res.render("authors",
                    {
                        nav,
                        title: 'Library',
                        authors
                    });
            })

    });

    authorsRouter.get('/:id', function (req, res) {
        const id = req.params.id;
        Authordata.findOne({ _id: id })
            .then(function (author) {
                res.render("author", {
                    nav,
                    title: 'Library',
                    author
                });
            })

    });

    // -------------------------new

    authorsRouter.get('/:id/delete', function (req, res) {
        const id = req.params.id;
        console.log(id);
        Authordata.remove({ _id: id }).then(function () {
            res.redirect("/authors");
        })

    });
    authorsRouter.get('/:id/update', function (req, res) {
        const id = req.params.id;
        Authordata.findOne({ _id: id })
            .then(function (author) {
                res.render("adda", {
                    nav,
                    title: 'Library',
                    author
                });
            })
    })
    authorsRouter.post('/:id/edit', function (req, res) {
        const id = req.params.id;
        const item = {
            author: req.body.author,
            book: req.body.book,
            genre: req.body.genre,
            image: req.body.image
        };
        Authordata.updateOne({ _id: id }, { $set: item }, function () {

            res.redirect("/authors");
        })
    })

    // ----------------------new
    return authorsRouter;
}



module.exports = router;