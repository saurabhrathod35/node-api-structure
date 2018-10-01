var express = require('express');
var userController = require('../../controllers/users')
var router = express.Router();

router.route('/')
    .get(userController.findUser)
    .post(userController.createUser);

router.route('/login')
    .post(userController.login);

router.route('/:userId')
    .get(userController.findUserById)
    .patch(userController.updateUser)
    .delete(userController.userRemove);

module.exports = router;