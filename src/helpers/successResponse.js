const successResponse = (req, res, data, code = 200) => res.send({
    code,
    data,
    success: true,
});

module.exports = 
    successResponse
;