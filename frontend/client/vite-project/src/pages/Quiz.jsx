import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/quiz/questions');
        if (!response.ok) throw new Error("Failed to load questions");
        const data = await response.json();
        console.log("✅ Questions fetched:", data);
        setQuestions(data);
        setLoading(false);
      } catch (error) {
        console.error('❌ Error fetching questions:', error.message);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswer = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/result/Golden Retriever');
    }
  };

  if (loading) {
    return <div style={styles.loading}>Loading questions...</div>;
  }

  if (questions.length === 0) {
    return <div style={styles.noQuestions}>No questions available!</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h3 style={styles.question}>{questions[currentQuestionIndex]?.question}</h3>
        <div style={styles.optionsContainer}>
          {questions[currentQuestionIndex]?.options.map((option, index) => (
            <button 
              key={index} 
              style={styles.optionButton}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.optionButtonHover.backgroundColor}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.optionButton.backgroundColor}
              onClick={handleAnswer}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ✅ Styling
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f9f9f9',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '600px',
    textAlign: 'center',
    animation: 'fadeIn 0.5s ease-in-out',
  },
  question: {
    color: '#333333',
    fontSize: '22px',
    fontWeight: '600',
    marginBottom: '20px',
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  optionButton: {
    padding: '14px',
    backgroundColor: '#ff6f61',
    color: '#fff',
    fontSize: '18px',
    fontWeight: '500',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
  },
  optionButtonHover: {
    backgroundColor: '#ff5349',
    transform: 'scale(1.05)',
  },
  loading: {
    fontSize: '20px',
    fontWeight: '500',
    color: '#555',
    textAlign: 'center',
    marginTop: '20px',
  },
  noQuestions: {
    fontSize: '20px',
    fontWeight: '500',
    color: '#ff6f61',
    textAlign: 'center',
    marginTop: '20px',
  }
};

export default Quiz;
