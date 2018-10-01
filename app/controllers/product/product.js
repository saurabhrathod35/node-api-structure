var mongoose = require('mongoose');

const PRODUCTS = require('../../models/products');

const findProducts = (req, res, next) => {
    PRODUCTS.find().then(product => {
        res.json({
            data: product,
            count: product.length
        })
    }).catch(err => {
        res.json({
            data: false,
            err: err
        })
    })
};

const findProductById = (req, res, next) => {
    PRODUCTS.findById(req.params.productId).then(product => {
        if (!product) {
            res.json({
                data: false
            })
        }
        res.json({
            data: product
        })
    }).catch(err => {
        res.json({
            data: false,
            err: err
        })
    })
};

const createProduct = (req, res, next) => {
    var newProduct = new PRODUCTS({
        category: req.body.category,
        productname: req.body.productname,
        price: req.body.price
    })
    newProduct.save().then(user => {
        res.json({
            data: user,
            created:true
        })
    }).catch(err => {
        res.json({
            data: false,
            err: err
        })
    })
};

const updateProduct = (req, res, next) => {
  
    PRODUCTS.findOneAndUpdate(
        { _id: req.params.productId },
        { $set: req.body }, { new: true, upsert: true }).then(data => {
            res.json({
                data: data,
                updated:true
            })
        }).catch(err => {
            res.json({
                data: false,
                err: err
            })
        })
};

const productRemove = (req, res, next) => {
    PRODUCTS.findOneAndRemove(
        { _id: req.params.productId }).then(data => {
            res.json({
                data: data
            })
        }).catch(err => {
            res.json({
                data: false,
                err: err
            })
        })
};

module.exports = {
    findProducts: findProducts,
    findProductById: findProductById,
    createProduct: createProduct,
    updateProduct: updateProduct,
    productRemove: productRemove
}