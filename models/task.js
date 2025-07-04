const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  plantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Plant', required: true },
  taskType: { type: String, enum: ['water', 'fertilize', 'prune'], required: true },
  date: { type: Date, required: true },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Task', taskSchema);