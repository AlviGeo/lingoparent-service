const Validator = require("fastest-validator");
const v = new Validator();

/*validator for register*/
const register = {
    email: {type: "email", empty: false},
    password: {type: "string", empty: false, min: 6, max: 25},
    firstname: {type: "string", empty: false},
    lastname: {type: "string", empty: false},
    phone: {type: "string", empty: false},
    role: {type: "string", empty: false},
    address: {type: "string", empty: false},
    gender: {type: "string", empty: false},
    date_birth: {type: "date", empty: false, convert:true},
    photo: {type: "string", empty: false}, // problem when use text
};

/*validator for login*/  
const login = {
    email: {type: "email", empty: false},
    password: {type: "string", min: 6, empty: false}
}

module.exports = {
    login,
    register
}
