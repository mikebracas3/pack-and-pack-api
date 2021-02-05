'use strict';
const mongoose = require('./main.js'),
      Schema = mongoose.Schema;

var schemas = {};


 schemas.User = mongoose.model('User', 
    new Schema({
        username: {type: String},
        email: {type: String},
        tel: {type: String},
        password: {type: String},
        age: {type: Number},
        gender: {type: String},
        hobby: {type: String},
        createdAt: {type: Date},
    })
);

module.exports = schemas;