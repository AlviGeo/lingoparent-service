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
const Students = db.master_student;

// Validator //
const Validator = require("fastest-validator");
const v = new Validator();
const validator = require("./validator/master.validator");

// Passport JS //
const passport = require('passport');
const { response } = require("express");
require("../../../config/passport");

/*Register*/
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


    /*Check Email*/
    const user = await User.findOne({
      where: {
        email: req.body.email
      },
    });

    if(user){
      return res.status(409).json({
          status: 'error',
          message: 'email already exist'
      }); 
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

    const token = jwt.sign({
        user: {
          email: req.body.email,
          password: req.body.passport
        },
      },
      process.env.SECRET,
    );
    
    /*Create Data User*/
    const dataUser = {
      email: email,
      password: passHash,
      role: role,
    };
    
    const UserIN = await User.create(dataUser);
    
    /* Create DB with Checking Role */
    switch (role){
			case "students":
				
        console.log("masuk students");
        /*Create Data Students with Find Email*/
        const students = await User.findOne({
          where: {
            email: email
          },
        });

        const dataStudents = {
          firstname: firstname,
          lastname: lastname,
          phone: phone,
          idUser_create: students.id,
          address: address,
          gender: gender,
          date_birth: date_birth,
          photo: photo
        };
        const StudentsIN = await Students.create(dataStudents);

        return successResponse(req, res, {UserIN, StudentsIN});

			case "parent":
        
        console.log("masuk parent");
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
        const ParentIN = await Parent.create(dataParent);

        return successResponse(req, res, {UserIN, ParentIN});

			default:
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