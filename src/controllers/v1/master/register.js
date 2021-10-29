// Response Message //
const {
  errorResponse,
  successResponse
} = require("../../../helpers")
const jwt = require("jsonwebtoken");

// Bcrypt Password //
const bcrypt = require("bcrypt");

// Import model
const db = require("../../../models/v1")
const User = db.master_user;
const Parent = db.master_parent;

// Validator //
const Validator = require("fastest-validator");
const v = new Validator();
const validator = require("./validator/master.validator");

// Passport JS //
const passport = require('passport');
const { response } = require("express");

require("../../../config/passport");


const register = async (req, res) => {
  try {

    const register = {
      email: {type: "email", empty: false},
      password: {type: "string", empty: false, min: 6, max: 25},
      firstname: {type: "string", empty: false},
      lastname: {type: "string", empty: false},
      phone: {type: "string", empty: false},
      role: {type: "string", empty: false},
      address: {type: "string", empty: false},
      gender: {type: "string", empty: false},
      date_birth: {type: "string", empty: false}, //problem check data date
      photo: {type: "string", empty: false}, // problem when use text
    };
    const validate = v.validate(req.body, register)

    // Message validate
    if(validate.length) {
      return errorResponse(req, res, {validate})
    }
  
    const {
      email,
      role
    } = req.body

    // Check email exist or not
    const user = await User.findOne({
      where: {
        email: email
      },
    });
    if(user){
      return res.status(409).json({
          status: 'error',
          message: 'email already exist'
      });
      
  }
    // Hash password
    const passHash = await bcrypt.hash(req.body.password, 10);

    // Create token
    const token = jwt.sign({
        user: {
          email: email,
          password: passport
        },
      },
      process.env.SECRET,
    );

    // User data for register
    const dataUser = {
      email: email,
      password: passHash,
      role: role,
      token
    };
    
    // Insert data into table user
    const UserIN = await User.create(dataUser);
    
    // Find parent email
    const parent = await User.findOne({
      where: {
        email: email
      },
    });

    // Parent data for register
    const dataParent = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phone: req.body.phone,
      idUser_create: parent.id,
      address: req.body.address,
      gender: req.body.gender,
      date_birth: req.body.date_birth,
      photo: req.body.photo
    };

    // Insert data into table user
    const ParentIN = await Parent.create(dataParent);
    return successResponse(req, res, {UserIN, ParentIN});

  } catch (err) {
    return errorResponse(req, res, {
      err
    })
  }
}

module.exports = register;