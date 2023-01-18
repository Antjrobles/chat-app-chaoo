const  mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  members: Array
}, {
  timestamps: true // Create a timestamp attribute is a mongoose feature.
});

const chatModel = mongoose.model('Chat', chatSchema); // Create a model using the schema

module.exports = chatModel; // Export the model

