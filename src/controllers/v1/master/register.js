const {
    errorResponse,
    successResponse
} = require("../../../helpers")
const google = require("googleapis")

const googleConfig = {
    clientId: process.env.GOOGLE_CLIENT_ID, // e.g. asdfghjkljhgfdsghjk.apps.googleusercontent.com
    clientSecret: process.env.GOOGLE_CLIENT_SECRET, // e.g. _ASDFA%DFASDFASDFASD#FAD-
    redirect: 'http://localhost:8000/google/callback' // this must match your google api settings
};


const register = async (req, res) => {
    try {
        const register = "this is register"
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