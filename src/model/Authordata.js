const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@libfiles.oj8cb.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
   author:String,
   book:String,
   genre:String,
   image:String 
});
 
var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports =  Authordata;