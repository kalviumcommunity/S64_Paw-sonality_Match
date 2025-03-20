import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import AddEntity from './pages/AddEntity';

function App() {
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
