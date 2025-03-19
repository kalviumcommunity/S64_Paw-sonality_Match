import { useParams } from 'react-router-dom';

const Result = () => {
  const { dogBreed } = useParams();

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.title}>Your Match: {dogBreed} 🐶</h2>
        <p style={styles.text}>Congrats! You resemble a {dogBreed} in personality!</p>
        <img 
          src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu54oR1M4uI5L6Vf5Y5VVKssVS3Rqxz-x28A&s?${dogBreed}`} 
          alt={dogBreed} 
          style={styles.image}
          onError={(e) => { e.target.src = '/fallback-dog.png'; }}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f9',
    padding: '20px',
    boxSizing: 'border-box',
  },
  content: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    width: '90%',
  },
  title: {
    fontSize: '2.5rem',
    color: '#ff6f61',
    fontWeight: '600',
    marginBottom: '15px',
  },
  text: {
    fontSize: '1.4rem',
    color: '#555',
    marginBottom: '20px',
    lineHeight: '1.6',
  },
  image: {
    width: '100%',
    height: '30vh',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '30vh',
  },
};

export default Result;
