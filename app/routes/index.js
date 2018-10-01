var express = require('express');
var router = express.Router();
var user = require('./users');
var product = require('./products')
router.route('/').get((req, res, next) => {
    res.json({
        message: 'Welcome to Inventory Management'
    })
})

router.use('/users',user);
router.use('/products',product)
 
module.exports = router;
