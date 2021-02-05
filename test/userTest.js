const assert    = require('chai').assert;
const expect    = require('chai').expect;
const should = require('chai').should();

const User = require('../src/user.js');
const mongoose = require('../config/mongoose/main.js');

var user_nuevo = {
    username: "Mike Bracas",
    email: 'mike@example.com',
    tel: "1234567890",
    password: "123456",
    age: 30,
    gender: "M",
    hobby: "Draw"
};


describe('User Insert', function() {
    var user = new User();
    user.load(user_nuevo);

    it('validate new row', function() {
      assert.equal(user.validate(), true, JSON.stringify(user.getErrors()));
    });

    it('save new row', function() {
        user.save().then((res) => {
            assert.isObject(res);
        }).catch((err) => {
            assert.isTrue(false, JSON.stringify(err))
        });
    });

});

describe('User Insert validations ', function() {
    var user = new User();

    user_nuevo = {
        username: "Mike Bracas",
    };
    user.load(user_nuevo);

    it('minimum fields', function() {
      assert.isFalse(user.validate());
    });

    user_nuevo = {
        username: "Mike Bracas",
        email: 'mikexamplecom',
        tel: "1234567890",
        password: "123456",
        age: 30,
        gender: "M",
        hobby: "Draw",
    };
    user.load(user_nuevo);

    it('validate email', function() {
      assert.isFalse(user.validate());
    });

    user_nuevo = {
        username: "Mike Bracas",
        email: 'mike@example.com',
        tel: "1234567890",
        password: "123456",
        age: 1,
        gender: "M",
        hobby: "Draw",
    };
    user.load(user_nuevo);

    it('minimum age', function() {
      assert.isFalse(user.validate());
    });

    user_nuevo = {
        username: "Mike Bracas",
        email: 'mike@example.com',
        tel: "1234567890",
        password: "123456",
        age: 30,
        gender: "Z",
        hobby: "Draw",
    };
    user.load(user_nuevo);

    it('other gender', function() {
      assert.isFalse(user.validate());
    });

    

});


mongoose.connection.close();