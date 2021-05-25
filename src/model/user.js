const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@libfiles.oj8cb.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

const userSchema =  new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required:true
    },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },phone:{
        type:Number,
        required:true
    },
    password: { type: String, required: true },
    cpassword:{type:String,required:true

    }

});

module.exports = mongoose.model('User', userSchema);