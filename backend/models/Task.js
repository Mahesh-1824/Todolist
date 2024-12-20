const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  priority: { type: String, required: true },
  deadline: { type: Date },
  description: String,
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Task', taskSchema);
