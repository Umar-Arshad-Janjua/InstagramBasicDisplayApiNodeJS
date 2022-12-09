const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
   imgURL:{
    type: String,
    required: true
   },
   caption: {
    type: String,
    required: true
   }

})





const instaData = mongoose.model('instadata', userSchema);



module.exports = instaData;