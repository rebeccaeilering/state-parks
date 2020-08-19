const Site = require('../models/site');

const site_index = (req, res) => {
  Site.find().sort({ createdAt: 1 })
  .then((result) => {
    res.render('sites/index', { title: 'All Sites', sites: result})
  })
  .catch((err) => {
    console.log(err)
  })
}

const site_details = (req, res) => {
  const id = req.params.id;
  Site.findById(id)
  .then(result => {
    res.render('sites/details', { site: result, title: 'Site Details' });
  })
  .catch((err) => {
    console.log(err);
  })
}

const site_add_get = (req, res) => {
  res.render('sites/add-site', { title: 'Add a new site'});
}

const site_add_post= (req, res) => {
  const site = new Site(req.body);
  site.save()
  .then((result) => {
    res.redirect('/sites');
  })
  .catch((err) => {
    console.log(err);
  })
}

module.exports = {
  site_index,
  site_details,
  site_add_get,
  site_add_post
}