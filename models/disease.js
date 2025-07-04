const mongoose = require('mongoose');

const diseaseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  symptoms: { type: String, required: true },
  remedies: { type: String, required: true },
  plantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Plant', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Disease', diseaseSchema);