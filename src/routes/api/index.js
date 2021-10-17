import express from 'express';
import validate from 'express-validation';

import * as userController from '../../controllers/user/user.controller';
import * as userValidator from '../../controllers/user/user.validator';

const router = express.Router();

router.post('/register', res.send('register'))
router.post('/login', res.send('login'))
router.post('/forgot-password', res.send('forgot password'))

module.exports = router;
