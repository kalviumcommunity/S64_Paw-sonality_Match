import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import DogBreed from './components/DogBreed';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:questionIndex" element={<Quiz />} />
        <Route path="/result/:dogBreed" element={<Result />} />
        <Route 
          path="/dog/:breed" 
          element={
            <DogBreed 
              breed="Golden Retriever"
              description="Golden Retrievers are friendly, intelligent, and devoted dogs. They are known for their excellent temperament and are great family pets."
              temperament="Friendly, Intelligent, Devoted"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7imzLSENDVyUErome8La7yQoVyp-yb-fBGw&s"
            />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
