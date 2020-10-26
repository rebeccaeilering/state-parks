const express = require('express');
var sassMiddleware = require('node-sass-middleware');
const mongoose = require('mongoose');
const siteRoutes = require('./routes/siteRoutes');
const authRoutes = require('./routes/authRoutes');

const { render } = require('ejs');
var path = require('path');
require('dotenv/config');

const app = express();

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err))

app.set('view engine', 'ejs');

app.use(sassMiddleware({
  /* Options */
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public'),
  debug: true,
  outputStyle: 'compressed',
}));

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.redirect('/sites');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// Site Routes
app.use('/sites', siteRoutes);
app.use(authRoutes);


app.use((req, res) => {
  res.status(404).render('404', { title: 'Not Found' });
})