const express = require('express');
const { signup, signin, signout } = require('../controllers/auth');
const { userSignupValidator } = require('../validator');

const router = express.Router();

router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);

//Signout
router.get('/signout', signout);

module.exports = router;
