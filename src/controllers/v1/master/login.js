const { errorResponse, successResponse } = require("../../../helpers")

const login = async (req, res) => {
    try {
        const login = "this is login"
        return successResponse(req, res, {login})
    } catch (err) {
        return errorResponse(req, res, {err})
    }
}

module.exports = login;