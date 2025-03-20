const mongoose = require('mongoose');

const dogBreedSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  temperament: String,
  image: String,
});

const DogBreed = mongoose.model('DogBreed', dogBreedSchema);

module.exports = DogBreed;
