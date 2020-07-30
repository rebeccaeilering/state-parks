const express = require('express');
var sassMiddleware = require('node-sass-middleware');
const mongoose = require('mongoose');
const siteRoutes = require('./routes/siteRoutes');
const { render } = require('ejs');
var path = require('path');

const app = express();

const dbURI = 'mongodb+srv://RebeccaE:BMy82XLnb@fzUx2@cluster0-qki7u.mongodb.net/state-parks?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err))

app.set('view engine', 'ejs');

app.use(sassMiddleware({
  /* Options */
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public'),
  debug: true,
  outputStyle: 'compressed',
  // prefix:  '/prefix'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
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


app.use((req, res) => {
  res.status(404).render('404', { title: 'Not Found' });
})