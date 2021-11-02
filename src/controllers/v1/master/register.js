// Response Message
const {
  errorResponse,
  successResponse
} = require("../../../helpers")
const jwt = require("jsonwebtoken");

// Bcrypt Password 
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

// Passport JS (Not used yet)
const passport = require('passport');
require("../../../config/passport");

// Register
const register = async (req, res) => {
  try {
    const {
      firstname,
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

    // Check Email
    const user = await User.findOne({
      where: {
        email: email
      },
    });

    if(user){
      return errorResponse(req, res, "email already exist");
    }
    
    // Validate Register Requirement
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
    
    // Check Error at Validate
    const checkType = typeof(check);
    if(checkType!="boolean") {
      return errorResponse(req, res, {check})
    } 
    
    // Hash Password
    const passHash = await bcrypt.hash(req.body.password, 10);
    
    // Inisiate Data User
    const dataUser = {
      email: email,
      password: passHash,
      role: role,
    };
    
    // Check Role
    if(role=="parent" || role=="student"){

      /*Create Data User*/
      await User.create(dataUser);

      // Create DB with Checking Role
      switch (role){
        case "student":
          
          // Create Data Student with Find Email 
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
            idUser_update: student.id,
            address: address,
            address: address,
            gender: gender,
            date_birth: date_birth,
            photo: photo
          };
          await Student.create(dataStudent);

          return successResponse(req, res, "Student Successfully Created");

        case "parent":
          
          // Create Data Parent with Find Email
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
            idUser_update: parent.id,
            address: address,
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