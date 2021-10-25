const login = {
    email: {type: "email", empty: false},
    password: {type: "string", min: 6, optional: false}
}

const register = {
    email: {type: "email", empty: false},
    password: {type: "string", empty: false, min: 6, max: 24}
}

module.exports = {
    login,
    register
}

// firstname
// lastname
// email
// password
// phone
// role