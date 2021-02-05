'use strict';
const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017'

mongoose.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) return console.log(err)
  
    console.log(`Connected MongoDB: ${url}`)
  })


module.exports = mongoose;