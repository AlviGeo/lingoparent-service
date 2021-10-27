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
require("../../../config/passport");

const register = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      password,
      phone,
      role,
    } = req.body


    const user = await User.findOne({
      where: {
        email: req.body.email
      },
    });
    // if (user) {
    //   throw new Error('User already exists with same email');
    // } else if (email) {
    //   throw new Error('User already exists with same email!');
    // } else if (phone) {
    //   throw new Error('User already exists with same phone number');
    // }
    if(user){
      return res.status(409).json({
          status: 'error',
          message: 'email already exist'
      });
      
  }
  const checkRegister = v.compile(validator.register);
    const check = checkRegister(
      { 
        email,
        password
      });
      if(!check) {
        return errorResponse(req, res, {check})
      }
      
    const passHash = await bcrypt.hash(req.body.password, 10);

    const token = jwt.sign({
        user: {
          email: req.body.email,
          password: req.body.passport
        },
      },
      process.env.SECRET,
    );

    const data = {
      // firstname,
      // lastname,
      email: req.body.email,
      password: passHash,
      // phone,
      role: req.body.role
    };

    User.create(data, {
      include: [{
        model: db.Parent,
        as: 'master_parent',
        include: [db.fullname, db.lastname, db.phone, db.address, db.gender]
      }]
    }).then(function() {
      return successResponse(req, res, {data});
    })
    
    return successResponse(req, res, {data});

  } catch (err) {
    return errorResponse(req, res, {
      err
    })
  }
}

module.exports = register;