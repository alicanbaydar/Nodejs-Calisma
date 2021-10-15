const User = require('../models/users')

const login_get = (req,res) => {
    res.render('login',{title:'Login'})
}

const login_post = (req,res) => {
    const user = new User(req.body)
    user.save()
        .then((result) => {
            res.render('login', {title:'Login'})
        })
        .catch((err) => {
            console.log(err)
        })
}

const signup_get = (req,res) => {
    res.render('signup', {title:'Sign UP'})
}

const signup_post = (req,res) => {
    const user = new User(req.body)
    user.save()
        .then((result) => {
            res.redirect('signup')
        })
        .catch((err) => {
            console.log(err)
        })
}

const logout_get = (req,res) => {
    res.render('kitaplar', {title: 'Kitaplar'})
}

module.exports = {
    login_get,
    login_post,
    signup_get,
    signup_post,
    logout_get
}