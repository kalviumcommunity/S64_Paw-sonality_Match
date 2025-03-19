const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true
  },
  correctAnswerIndex: {
    type: Number,
    required: true
  }
});

const Quiz = mongoose.model('Quiz', quizSchema, 'quizzes'); // ✅ Explicit collection name
module.exports = Quiz;
