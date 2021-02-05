
const UserRules = {
    username: 'required',
    email: 'required|email',
    tel: 'size:10|required',
    password: 'required',
    age: 'min:10|required',
    gender: 'in:M,F|required',
    hobby: 'required',
  };

  module.exports = UserRules; 