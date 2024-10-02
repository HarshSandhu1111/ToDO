const mongoose = require('mongoose');


const userschema = new mongoose.Schema({
    text:{
  type: String,
    }
    
  });
  
  module.exports = mongoose.model('usermodel', userschema);
