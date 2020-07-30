const express = require('express');
const Site = require('../models/site');

const router = express.Router();


router.get('/', (req, res) => {
  Site.find().sort({ createdAt: -1 })
  .then((result) => {
    res.render('index', { title: 'All Sites', sites: result})
  })
  .catch((err) => {
    console.log(err)
  })
})

router.post('/', (req, res) => {
  const site = new Site(req.body);
  site.save()
  .then((result) => {
    res.redirect('/sites');
  })
  .catch((err) => {
    console.log(err);
  })
});

router.get('/add-site', (req, res) => {
  res.render('add-site', { title: 'Add a new site'});
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  Site.findById(id)
  .then(result => {
    res.render('details', { site: result, title: 'Site Details' });
  })
  .catch((err) => {
    console.log(err);
  })
})

module.exports = router;