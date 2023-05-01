"use strict"

const main = (req, res) => {
    res.render('index')
}

const login = (req, res) => {
    res.render('login')
}


module.exports = {
    main,
    login,
}