const User = require('../models/User');
const Comments = require('../models/Comments');
const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcryptjs');

exports.log_in = asyncHandler(async (req, res, next) => {
    let { email, password } = req.body;
    try {
        let userDb = await User.find({ 'userName': email }).exec();

        const match = await bcrypt.compare(password, userDb[0].password);

        if (userDb[0].userName === email) {
            if (match == true) {
                const opts = {};
                opts.expiresIn = 1200; //token expires in 2min
                const secret = process.env.SECRET_KEY
                const token = jwt.sign({ email }, secret, opts);
                return res.status(200).json({
                    message: 'Autorización exitosa',
                    token,
                });
            }
        }
    } catch (error) {
        res.status(500).json({ message: 'Usuario o contraseña incorrectos' });
    }

    return res.status(401).json({ message: 'Autorizacion fallida' });
});

exports.log_out = asyncHandler(async (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err) }
        res.redirect('/published');
    });
});