const mongoose = require('mongoose');

const ClinicSchema = new mongoose.Schema({
    region: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    openingHours: {
      type: String,
      required: true
    },
    suburb: {
      type: String,
      required:true
    },
    specialistType: {
      type: String,
      required:true
    }
  });

module.exports = Clinic = mongoose.model('clinic', ClinicSchema);