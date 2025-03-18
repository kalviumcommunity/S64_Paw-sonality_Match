// src/App.js
import React from 'react';
import DogBreed from './components/DogBreed';

function App() {
  // Dummy data for a dog breed
  const dogBreedData = {
    breed: 'Golden Retriever',
    description: 'Golden Retrievers are friendly, intelligent, and devoted dogs. They are known for their excellent temperament and are great family pets.',
    temperament: 'Friendly, Intelligent, Devoted',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7imzLSENDVyUErome8La7yQoVyp-yb-fBGw&s', // Example image URL for Golden Retriever
  };

  return (
    <div className="App">
      <h1>Paw-sonality Match</h1>
      <h2>Find Your Perfect Dog Match</h2>
      <DogBreed
        breed={dogBreedData.breed}
        description={dogBreedData.description}
        temperament={dogBreedData.temperament}
        image={dogBreedData.image}
      />
    </div>
  );
}

export default App;
