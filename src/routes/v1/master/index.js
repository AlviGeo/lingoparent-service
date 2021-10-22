const express = require("express")


const masterController = require('../../../controllers/v1/master')
const masterValidator = require('../../../controllers/v1/master/validator/master.validator')

const router = express.Router();

router.post('/register', masterController.register);
router.post('/login', masterController.login)

router.get("/", (req, res) => {
    res.json({ message: "The server has runn." });
});

module.exports = router;
