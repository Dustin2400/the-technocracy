const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

router.get('/new-post', (req,res) => {
    res.render('new-post');
});

module.exports = router;