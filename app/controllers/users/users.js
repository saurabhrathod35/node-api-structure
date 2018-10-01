var mongoose = require('mongoose');

const USER = require('../../models/users');

const findUser = (req, res, next) => {
    console.log('hi');

    USER.find().then(users => {
        res.json({
            data: users,
            count: users.length
        })
    }).catch(err => {
        res.json({
            data: false,
            err: err
        })
    })
};


const findUserById = (req, res, next) => {
    USER.findById(req.params.userId).then(user => {
        if (!user) {
            res.json({
                data: false
            })
        }
        res.json({
            data: user
        })
    }).catch(err => {
        res.json({
            data: false,
            err: err
        })
    })
};

const createUser = (req, res, next) => {
    var newUser = new USER({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        fullname: req.body.fullname
    })
    newUser.save().then(user => {
        res.json({
            data: user,
            generate: true
        })
    }).catch(err => {
        res.json({
            data: false,
            err: err
        })
    })
};

const updateUser = (req, res, next) => {
    USER.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body }, { new: true, upsert: true }).then(data => {
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


const userRemove = (req, res, next) => {
    USER.findOneAndRemove(
        { _id: req.params.userId }).then(data => {
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

const login = (req, res, next) => {

    USER.findOne(
        {
            username: req.body.username,
            password: req.body.password
        }
    ).then(user => {
        if (!user) {
            res.json({ exist: false })
        }
        res.json({ exist: true })
    }).catch(err => {
        res.json({
            exist: false,
            err: err
        })
    })
}
module.exports = {
    findUser: findUser,
    findUserById: findUserById,
    createUser: createUser,
    updateUser: updateUser,
    userRemove: userRemove,
    login: login
}