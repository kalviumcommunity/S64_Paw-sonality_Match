import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:questionIndex" element={<Quiz />} />
        <Route path="/result/:dogBreed" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
