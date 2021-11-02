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
const Student = db.master_student;

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
      firstname,
      lastname,
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
      return errorResponse(req, res, "email already exist");
    }
    

    /*Validate Register Requirement*/
    const checkRegister = v.compile(validator.register);
    const check = checkRegister(
      { 
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        phone: phone,
        role: role,
        address: address,
        gender: gender,
        date_birth: date_birth,
        photo: photo
      });
    
    /*Check Error at Validate*/  
    const checkType = typeof(check);
    if(checkType!="boolean") {
      return errorResponse(req, res, {check})
    } 
    
    /*Hash Password*/
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
    };
    
    /*Check Role*/
    if(role=="parent" || role=="student"){

      /*Create Data User*/
      await User.create(dataUser);

      /* Create DB with Checking Role */
      switch (role){
        case "student":
          
          /*Create Data Student with Find Email*/
          const student = await User.findOne({
            where: {
              email: email
            },
          });

          const dataStudent = {
            firstname: firstname,
            lastname: lastname,
            phone: phone,
            idUser_create: student.id,
            address: address,
            gender: gender,
            date_birth: date_birth,
            photo: photo
          };
          await Student.create(dataStudent);

          return successResponse(req, res, "Student Successfully Created");

        case "parent":
          
          /*Create Data Parent with Find Email*/
          const parent = await User.findOne({
            where: {
              email: email
            },
          });

          const dataParent = {
            firstname: firstname,
            lastname: lastname,
            phone: phone,
            idUser_create: parent.id,
            address: address,
            gender: gender,
            date_birth: date_birth,
            photo: photo
          };
          await Parent.create(dataParent);

          return successResponse(req, res,  "Parent Successfully Created");

      }
    }else{
      return res.status(409).json({
        status: 'error',
        message: "role dosen\'t exist"
      });
    }

  } catch (err) {
    return errorResponse(req, res, {
      err
    })
  }
}

module.exports = register;