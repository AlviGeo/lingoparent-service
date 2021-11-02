// Response Message
const {
    errorResponse,
    successResponse
} = require("../../../helpers");
const jwt = require("jsonwebtoken");

// Bcrypt Password 
const bcrypt = require("bcrypt");

// Import model
const db = require("../../../models/v1")
const User = db.master_user;
const Token = db.trx_access_token;

// Validator 
const Validator = require("fastest-validator");
const v = new Validator();
const validator = require("./validator/master.validator");

const login = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;

        // Validate Login Requirement
        const checkLogin = v.compile(validator.login);
        const check = checkLogin({
            email: email,
            password: password,
        })

        // Check Error at Validate 
        const checkType = typeof (check);
        if (checkType != "boolean") {
            return errorResponse(req, res, {
                check
            })
        }

        // Validate if user exist in DB
        const user = await User.findOne({
            where: {
                email
            }
        });
        if (!user) {
            return res.status(404).json({
                status: 'error',
                message: 'Wrong email'
            });
        }

        // Compare bcrpyt password
        const isValidPass = await bcrypt.compare(password, user.password)
        if (!isValidPass) {
            return errorResponse(req, res, 'Wrong password!');
        }

        // Create token
        const token = jwt.sign({
                user: {
                    id: user.id,
                    email: user.email
                },
            },
            process.env.SECRET, {
                expiresIn: "2h"
            }
        );

        // Store data and insert to DB
        dataToken = {
            id_user: user.id,
            access_token: token,
        }
        await Token.create(dataToken);

        return successResponse(req, res, {
            token
        });


    } catch (err) {
        return errorResponse(req, res, {
            err
        })
    }
}


module.exports = login;