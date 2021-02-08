
const UserSearchRules = {
    username: 'min:3',
    email: 'email',
    tel: 'min:3',
    password: '',
    age: 'min:1',
    gender: 'in:M,F',
    hobby: 'min:3',
  };

  module.exports = UserSearchRules; 