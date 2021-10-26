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

// Validator //
const Validator = require("fastest-validator");
const v = new Validator();
const validator = require("./validator/master.validator");

// Passport JS //
const passport = require('passport');
require("../../../config/passport");

// Register => hash belom
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


    // if (process.env.IS_GOOGLE_AUTH_ENABLE === 'true') {
    //   if (!req.body.code) {
    //     throw new Error('code must be defined');
    //   }
    //   const {
    //     code
    //   } = req.body;
    //   const customUrl = `${process.env.GOOGLE_CAPTCHA_URL}?secret=${process.env.GOOGLE_CAPTCHA_SECRET_SERVER}&response=${code}`;
    //   const response = await axios({
    //     method: 'post',
    //     url: customUrl,
    //     data: {
    //       secret: process.env.GOOGLE_CAPTCHA_SECRET_SERVER,
    //       response: code,
    //     },
    //     config: {
    //       headers: {
    //         'Content-Type': 'multipart/form-data',
    //       },
    //     },
    //   });
    //   if (!(response && response.data && response.data.success === true)) {
    //     throw new Error('Google captcha is not valid');
    //   }
    // }
    // return res.status(404).json({
    //   status: 'ok',
    //   data: firstname
    // });

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

    const passHash = await bcrypt.hash(req.body.password, 10);

    // const token = jwt.sign({
    //     user: {
    //       email: req.body.email,
    //       password: req.body.passport
    //     },
    //   },
    //   process.env.SECRET,
    // );

    const data = {
      // firstname,
      // lastname,
      email: req.body.email,
      password: passHash,
      // phone,
      role: req.body.role
    };

    await User.create(data);
    return successResponse(req, res, {data});


  } catch (err) {
    return errorResponse(req, res, {
      err
    })
  }
}

module.exports = register;