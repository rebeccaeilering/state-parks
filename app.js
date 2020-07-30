const express = require('express');
const mongoose = require('mongoose');
const siteRoutes = require('./routes/siteRoutes');
const { render } = require('ejs');

const app = express();

const dbURI = 'mongodb+srv://RebeccaE:BMy82XLnb@fzUx2@cluster0-qki7u.mongodb.net/state-parks?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err))

app.set('view engine', 'ejs');

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