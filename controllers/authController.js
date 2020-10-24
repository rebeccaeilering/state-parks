const User = require('../models/user');
const jwt = require('jsonwebtoken');

// Errors

// Create Token


// Code for Routes
module.exports.signup_get = (req, res) => {
  res.render('signup');
}

module.exports.login_get = (req, res) => {
  res.render('login');
}

module.exports.signup_post = async (req, res) => {

}

module.exports.login_post = async (req, res) => {

}

module.exports.logout_get = (req, res) => {

}