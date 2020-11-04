const User = require('../models/user');
const jwt = require('jsonwebtoken');

// Errors
const handleErrors = (err) => {
  console.log(err.message, err.code)
  let errors = { email: '', password: '' };

  // duplicate error code
  if (err.code === 11000) {
    errors.email = 'that email is already registered';
    return errors
  }

  // validation errors
  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({properties}) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
}

// Create Token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'parks secret', {
    expiresIn: maxAge
  })
}

// Code for Routes
module.exports.signup_get = (req, res) => {
  res.render('signup', { title: 'Sign Up' });
}

module.exports.login_get = (req, res) => {
  res.render('login', { title: 'Log In' });
}

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000});
    res.status(201).json({ user: user._id });
  }
  catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({errors});
  }

}

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.send('user login');
}

module.exports.logout_get = (req, res) => {

}