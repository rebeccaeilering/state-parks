const User = require('../models/user');
const jwt = require('jsonwebtoken');

// Errors

// Create Token


// Code for Routes
module.exports.signup_get = (req, res) => {
  res.render('signup', { title: 'Sign Up' });
}

module.exports.login_get = (req, res) => {
  res.render('login', { title: 'Log In' });
}

module.exports.signup_post = async (req, res) => {
  res.send('new signup');
}

module.exports.login_post = async (req, res) => {
  res.send('user login');
}

module.exports.logout_get = (req, res) => {

}