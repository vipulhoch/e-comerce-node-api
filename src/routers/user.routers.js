const express = require('express');
const auth = require('../middleware/auth.middleware');
const usersController = require('../controller/user.controller');
const authController = require('../controller/auth.controller');


const router = new express.Router();

router.post('/',usersController.Register);
router.post('/login',usersController.Login);
router.get('/me', auth,authController.Profile);
router.post('/logout', auth, authController.Logout);
router.post('/logoutAll',auth,authController.logoutAll);
router.patch('/me', auth,authController.profileUpdate);
router.delete('/me', auth,authController.Delete);


module.exports = router;    