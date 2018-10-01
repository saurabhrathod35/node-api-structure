var express = require('express');
var userController = require('../../controllers/product')
var router = express.Router();

router.route('/')
    .get(userController.findProducts)
    .post(userController.createProduct);

router.route('/:productId')
    .get(userController.findProductById)
    .patch(userController.updateProduct)
    .delete(userController.productRemove);

module.exports = router;