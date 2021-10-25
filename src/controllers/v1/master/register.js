// Response Message //
const {
    errorResponse,
    successResponse
} = require("../../../helpers")
const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';

// Import model
const db = require("../../../models/v1")
const User = db.master_user;

// Validator //
const Validator = require("fastest-validator");
const v = new Validator();
const validator = require("./validator/master.validator");

// Nodemailer
const sendMail = require("./sendEmail");

// Passport JS //
const passport = require('passport');
require("../../../config/passport");

const register = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body

        if (process.env.IS_GOOGLE_AUTH_ENABLE === 'true') {
            if (!req.body.code) {
              throw new Error('code must be defined');
            }
            const {
              code
            } = req.body;
            const customUrl = `${process.env.GOOGLE_CAPTCHA_URL}?secret=${process.env.GOOGLE_CAPTCHA_SECRET_SERVER}&response=${code}`;
            const response = await axios({
              method: 'post',
              url: customUrl,
              data: {
                secret: process.env.GOOGLE_CAPTCHA_SECRET_SERVER,
                response: code,
              },
              config: {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              },
            });
            if (!(response && response.data && response.data.success === true)) {
              throw new Error('Google captcha is not valid');
            }
          }

          const user = await User.findOne({
              where: {
                  email
              },
          });
          if (user) {
            throw new Error('User already exists with same email');
          } 

          bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
            // Store hash in your password DB.
        });
          const token = jwt.sign({
            user: {
              email: req.body.email,
              password: req.body.passport
            },
          },
          process.env.SECRET,
        );
    
        const payload = {
          email,
          password: reqPass,
          isVerified: false,
          verifiedToken: token,
        };
    
        await User.create(payload);

        sendMail();

        return successResponse(req, res, {
            register
        })
    } catch (err) {
        return errorResponse(req, res, {
            err
        })
    }
}

module.exports = register;