const express = require('express');
const siteController = require('../controllers/siteController');
const router = express.Router();

router.get('/', siteController.site_index);
router.post('/', siteController.site_add_post);
router.get('/add-site', siteController.site_add_get);
router.get('/:id', siteController.site_details);

module.exports = router;