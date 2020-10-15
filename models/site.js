const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const siteSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  lat: {
    type: String,
    required: true
  },
  long: {
    type: String,
    required: true
  },
  info: {
    type: String,
    required: true
  },
  file: {
    type: String,
    required: true
  },
  activities: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
}, { timestamps: true});

const Site = mongoose.model('Site', siteSchema);

module.exports = Site;