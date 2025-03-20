import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quiz/0');
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>🐾 Paw-sonality Match</h1>
        <p style={styles.subtitle}>Find your perfect dog breed based on your personality!</p>
      </header>
      <main style={styles.main}>
        <div style={styles.content}>
          <img 
            src="https://static.vecteezy.com/system/resources/previews/029/311/717/original/cute-puppy-transparent-background-png.png" 
            alt="Cute Dog" 
            style={styles.banner} 
          />
          <button 
            style={styles.startButton} 
            onMouseEnter={(e) => e.target.style.backgroundColor = '#ff4f41'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#ff6f61'}
            onClick={handleStartQuiz}
          >
            Take the Quiz
          </button>
        </div>
      </main>
      <footer style={styles.footer}>
        <p>Made with ❤️ for dog lovers!</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    boxSizing: 'border-box',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '3rem',
    color: '#ff6f61',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#555',
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
  },
  banner: {
    width: '180px',
    height: 'auto',
  },
  startButton: {
    padding: '12px 24px',
    fontSize: '1.2rem',
    color: '#fff',
    backgroundColor: '#ff6f61',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  footer: {
    marginTop: '30px',
    fontSize: '1rem',
    color: '#777',
  }
};

export default Home;
