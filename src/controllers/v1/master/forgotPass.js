const { errorResponse, successResponse } = require("../../../helpers")

const forgotPass = async (req, res) => {
    try {
        const forgotPass = "this is forgotPass"
        return successResponse(req, res, {forgotPass})
    } catch (err) {
        return errorResponse(req, res, {err})
    }
}

module.exports = forgotPass;