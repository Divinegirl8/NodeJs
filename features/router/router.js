const express = require('express');
const router = express.Router();
const {register,loginUser,userFinder,userDeleting} = require("../controller/UserController");

router.route('/register').post(register);
router.route('/login').post(loginUser);
router.route('/findUser').get(userFinder);
router.route('/deleteUser').delete(userDeleting);

module.exports = router;