const express = require('express');
const session = require("express-session");
const passport = require('passport');
const router = express.Router();
require("../../../config/passport");

const masterController = require('../../../controllers/v1/master');
const masterValidator = require('../../../controllers/v1/master/validator/master.validator');

router.get('/', function(req, res, next) {
  res.send('masuk');
});

// Auth middleware that checks if the user is logged in
const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
}

/* POST user register. */
router.post('/register', masterController.register);

router.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}));
router.get('/google/callback', passport.authenticate('google', { 
  successRedirect: '/success',
  failureRedirect: '/failed'
})
);
router.get('/success', isLoggedIn, (req, res) => res.send(`Welcome mr ${req.user.displayName}`))
router.get('/failed', (req, res) => {
  res.send('something went wrong..')
})


/* POST user login. */
router.post('/login', masterController.login)

/* POST user logout. */
router.post('/logout')

/* PUT user password. */
router.put('update-password')

/* POST user forgot password. */
router.post('/forgot-password')

/* PUT user request reset password. */
router.put('/passwordreset')

module.exports = router;
