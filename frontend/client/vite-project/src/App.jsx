import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import AddEntity from './pages/AddEntity';
function App() {
  // Dummy data for a dog breed
  const dogBreedData = {
    breed: 'Golden Retriever',
    description: 'Golden Retrievers are friendly, intelligent, and devoted dogs. They are known for their excellent temperament and are great family pets.',
    temperament: 'Friendly, Intelligent, Devoted',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7imzLSENDVyUErome8La7yQoVyp-yb-fBGw&s', // Example image URL for Golden Retriever
  };

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:questionIndex" element={<Quiz />} />
        <Route path="/result/:dogBreed" element={<Result />} />

        <Route path="/add-entity" element={<AddEntity />} />

      </Routes>
    </Router>
  );
}

export default App;
