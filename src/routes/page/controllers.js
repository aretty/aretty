"use strict"

const User = require("../../models/User")

const output = {
    main : (req, res) => {
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
        const currentDomain = req.headers.host;
        var serverType = "cafe24";

        if(currentDomain.substring(0,5) == 'local'){
            serverType = "local";
        }

        const user = new User(req.body);
        const response = await user.login(serverType);
        return res.json(response);
    },
    register : async (req,res) => {
        const currentDomain = req.headers.host;
        var serverType = "cafe24";

        if(currentDomain.substring(0,5) == 'local'){
            serverType = "local";
        }

        const user = new User(req.body);
        const response = await user.register(serverType);
        return res.json(response);
    }
}

module.exports = {
   output,
   process,
};