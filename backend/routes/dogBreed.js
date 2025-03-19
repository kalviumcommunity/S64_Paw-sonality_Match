const express = require('express');
const router = express.Router();
const DogBreed = require('../models/DogBreed');

router.get('/breeds', async (req, res) => {
  try {
    const breeds = await DogBreed.find();
    res.json(breeds);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
