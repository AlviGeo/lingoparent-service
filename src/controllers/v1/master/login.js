// Response Message //
const {
    errorResponse,
    successResponse
} = require("../../../helpers");
const jwt = require("jsonwebtoken");

// Import model
const db = require("../../../models/v1")
const User = db.master_user;
const Parent = db.master_parent;

// Validator //
const Validator = require("fastest-validator");
const v = new Validator();

const login = async (req, res) => {
    try {
        
        const login = {
            email: {
                type: "email",
                empty: false
            },
            password: {
                type: "string",
                min: 6,
                empty: false
            }
        }

        const validate = v.validate(req.body, login);

        //Message Validate
        if (validate.length) {
            return errorResponse(req, res, {validate});
        }

        const user = await User.findOne({
            where: {email: req.body.email}
        })
        if(!user) {
            return errorResponse(req, res, 'Wrong email!')
        }

        const isValidPass = await bcrypt.compare(req.body.password, user.password)
        if(!isValidPass){
            return errorResponse(req, res, 'Wrong password!');
        }

        const data = await User.findOne({
            where: { email: req.body.email}, 
            attributes: ['id', 'name', 'email', 'role'],
            include: {
                model: Parent,
                attributes: ['firstname', 'lastname', 'phone', 'idUser_create']
            }
        });
        return successResponse(req, res, {data})

    } catch (err) {
        return errorResponse(req, res, {
            err
        })
    }
}


module.exports = login;