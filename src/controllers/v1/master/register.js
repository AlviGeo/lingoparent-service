const { errorResponse, successResponse } = require("../../../helpers")

const register = async (req, res) => {
    try {
        const register = "this is register"
        return successResponse(req, res, {register})
    } catch (err) {
        return errorResponse(req, res, {err})
    }
}

module.exports = register;