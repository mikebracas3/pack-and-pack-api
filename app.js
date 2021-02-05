var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

var UserController = require('./controllers/UserController');
app.use('/user', UserController);

module.exports = app;
