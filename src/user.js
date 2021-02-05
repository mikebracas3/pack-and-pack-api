const Validator = require('validatorjs');
const UserModel = require('../modelValidation/UserModel');
const UserSearchModel = require('../modelValidation/UserSearchModel');
const UserRemoveModel = require('../modelValidation/UserRemoveModel');
const schemas = require('../config/mongoose/schemas.js');
const { response } = require('../app');
const merge = require('merge');
 
class User {
    
    load(data){
     this.data = data;        
    }

    validate(scenario){
        switch(scenario){
            case "search":
                this.validation = new Validator(this.data, UserSearchModel);
                break;
            case "remove":
                this.validation = new Validator(this.data, UserRemoveModel);
                break;    
            default:
                this.validation = new Validator(this.data, UserModel);
                break;    
        }
        this.errors = this.validation.errors;
        return this.validation.passes();   
    }
    
    
    save(){
        if(this.validate()){
            this.data.createdAt = new Date();
            var user = new schemas.User(this.data);
            return user.save();             
        }
        return null;
    }

    getErrors(){        
        return this.errors;
    }


    find(query){
        return schemas.User.find(query);
    }

    remove(query){
        return schemas.User.deleteOne(query);
    }

    findCustom(query){
        var dateOffset = (24*60*60*1000) * 3; //3 days
        var myDate = new Date();
        myDate.setTime(myDate.getTime() - dateOffset);
        
        var queryCustom = {age: {$gt:18}, gender:"M", createdAt:{$gte: myDate}};
        var queryCustom = merge(query, queryCustom)
        
        return schemas.User.find(queryCustom);
    }
}
  
  module.exports = User;