var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const User = require('../src/user.js');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


 router.post('/create', function(req, res) {
	var resp = {"code":0,"message":"Datos incorrectos","response":{}};
	var user = new User();
	user.load(req.body);

	if(user.validate()){
		user.save().then((user) => {
			resp.code = 10;
			resp.message = "Successful";
			resp.response = user;

			return res.jsonp(resp);
        }).catch((err) => {
			resp.response = err;
			return res.jsonp(resp);
        });
	}else{
		resp.response = user.getErrors();
		return res.jsonp(resp);
	}
 });


 router.get('/search', function(req, res) {
	var resp = {"code":0,"message":"Datos incorrectos","response":""};
	var user = new User();
	user.load(req.query);
	
	if(user.validate('search')){
		user.find(req.query).then((items) => {
			resp.code = 10;
			resp.message = "Successful";
			resp.response = items;
			
			return res.jsonp(resp);
		}).catch((err) => {
			response.response = err;
			return res.jsonp(resp);
		});
	}else{
		resp.response = user.getErrors();
		return res.jsonp(resp);
	}
 });

 router.post('/delete', function(req, res) {
	var resp = {"code":0,"message":"Datos incorrectos","response":""};
	var user = new User();
	user.load(req.body);
	
	if(user.validate('remove')){
		user.remove(req.body).then((items) => {
			resp.code = 10;
			resp.message = "Successful";
			resp.response = items;
			
			return res.jsonp(resp);
		}).catch((err) => {
			response.response = err;
			return res.jsonp(resp);
		});
	}else{
		resp.response = user.getErrors();
		return res.jsonp(resp);
	}
 });


 router.get('/searchCustom', function(req, res) {
	var resp = {"code":0,"message":"Datos incorrectos","response":""};
	var user = new User();
	user.load(req.body);
	
	if(user.validate('search')){
		user.findCustom(req.body).then((items) => {
			resp.code = 10;
			resp.message = "Successful";
			resp.response = items;
			
			return res.jsonp(resp);
		}).catch((err) => {
			response.response = err;
			return res.jsonp(resp);
		});
	}else{
		resp.response = user.getErrors();
		return res.jsonp(resp);
	}
 });

 
 
 module.exports = router;