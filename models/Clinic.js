const mongoose = require('mongoose');

const ClinicSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  specialistType: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  suburb: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  openingHours: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  websiteURL: {
    type: String,
    required: true
  }
});

module.exports = Clinic = mongoose.model('clinics', ClinicSchema);