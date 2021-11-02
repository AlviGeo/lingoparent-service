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
const Token = db.trx_access_token;

// Validator //
const Validator = require("fastest-validator");
const v = new Validator();

const login = async (req, res) => {
    try {
        const {
            email, 
            password
        } = req.body;
        
        // Validate if user exist in DB
        const user = await User.findOne(
            {
                email: email
            });
        if(!user){
            return res.status(404).json({
                status: 'error',
                message: 'Wrong email or password'
            });
        }
        if(user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign({
                id: user.id, 
                email,
            }, process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );
            // Save user token
            await Token.create({
                id_user: user.id,
                access_token: token
            });
            return successResponse(req, res, 'User login success.')
        }

    } catch (err) {
        return errorResponse(req, res, {
            err
        })
    }
}


module.exports = login;