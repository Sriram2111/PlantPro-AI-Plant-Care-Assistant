const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  careTips: { type: String, required: true },
  image: { type: String }, // URL to image
  diseases: [{
    name: { type: String },
    symptoms: { type: String },
    treatment: { type: String },
  }],
});

module.exports = mongoose.model('Plant', plantSchema);