// src/components/DogBreed.js
import React from 'react';

// DogBreed component to display a single dog breed
const DogBreed = ({ breed, description, temperament, image }) => {
  return (
    <div className="dog-breed">
      <h3>{breed}</h3>
      <img src={image} alt={breed} style={{ width: '200px', height: 'auto' }} />
      <p>{description}</p>
      <p><strong>Temperament:</strong> {temperament}</p>
    </div>
  );
};

export default DogBreed;
