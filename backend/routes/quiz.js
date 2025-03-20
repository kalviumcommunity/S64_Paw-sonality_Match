const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');

router.get('/questions', async (req, res) => {
  try {
    const questions = await Quiz.find();
    console.log("✅ Fetched Questions:", questions);
    if (questions.length === 0) {
      return res.status(404).json({ message: "No questions available" });
    }
    res.json(questions);
  } catch (error) {
    console.error(`❌ Error fetching questions: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
