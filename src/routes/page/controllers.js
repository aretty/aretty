"use strict"

const User = require("../../models/User")

const output = {
    main : (req, res) => {
        const currentDomain = req.headers.host;
        console.log('Current Domain:', currentDomain);
        res.render('index')
    },
    login : (req, res) => {
        res.render('login')
    },
    register : (req, res) => {
        res.render('register')
    }
};

const process = {
    login : async (req,res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    register : (req,res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    }
}

module.exports = {
   output,
   process,
};