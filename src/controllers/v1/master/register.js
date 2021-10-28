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
    const {
      fullname,
      lastname,
      email,
      password,
      phone,
      role,
      address,
      gender,
      date_birth,
      photo
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
        fullname: req.body.fullname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        role: req.body.role,
        address: req.body.address,
        gender: req.body.gender,
        date_birth: req.body.date_birth,
        photo: req.body.photo
      });

     console.log(check);
    if(!check) { // tidak true
      return errorResponse(req, res, {check}) //false
    }else{
      console.log("sini");
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

    const dataUser = {
      email: req.body.email,
      password: passHash,
      role: req.body.role,
    };
    

    // User.create(data, {
    //   include: [{
    //     model: db.Parent,
    //     as: 'master_parent',
    //     include: [db.fullname, db.lastname, db.phone, db.address, db.gender]
    //   }]
    // }).then(function() {
    //   return successResponse(req, res, {data});
    // })
    
    const UserIN = await User.create(dataUser);
    
    const parent = await User.findOne({
      where: {
        email: req.body.email
      },
    });

    const dataParent = {
      fullname: req.body.fullname,
      lastname: req.body.lastname,
      phone: req.body.phone,
      idUser_create: parent.id,
      address: req.body.address,
      gender: req.body.gender,
      date_birth: req.body.date_birth,
      photo: req.body.photo
    };
    const ParentIN = await Parent.create(dataParent);

    return successResponse(req, res, {UserIN, ParentIN});

  } catch (err) {
    return errorResponse(req, res, {
      err
    })
  }
}

module.exports = register;