const Validator = require("fastest-validator");
const v = new Validator();

const register = {
    email: {type: "email", empty: false},
    password: {type: "string", empty: false, min: 6, max: 25},
    fullname: {type: "string", empty: false},
    lastname: {type: "string", empty: false},
    phone: {type: "string", empty: false},
    role: {type: "string", empty: true}
};

  
const login = {
    email: {type: "email", empty: false},
    password: {type: "string", min: 6, empty: false}
}

module.exports = {
    login,
    register
}
