import { useState, useEffect } from 'react';

const AddEntity = () => {
  const [name, setName] = useState('');
  const [entities, setEntities] = useState([]);

  // Fetch existing entities from the server
  useEffect(() => {
    fetch('http://localhost:5000/entities')
      .then((res) => res.json())
      .then((data) => setEntities(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEntity = { name };

    const res = await fetch('http://localhost:5000/entities', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEntity),
    });

    if (res.ok) {
      const addedEntity = await res.json();
      setEntities((prev) => [...prev, addedEntity]);
      setName('');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2>Add New Entity</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Entity Name"
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>Add Entity</button>
        </form>
        
        <ul style={styles.list}>
          {entities.map((entity) => (
            <li key={entity.id} style={styles.listItem}>{entity.name}</li>
          ))}
        </ul>
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
    alignItems: 'center', // Center vertically
    backgroundColor: '#f9f9f9',
  },
  content: {
    width: '400px',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  form: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  input: {
    padding: '10px',
    width: '70%',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#ff6f61',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    color: '#000000',
  },
  listItem: {
    padding: '10px',
    borderBottom: '1px solid #000000',
  },
};

export default AddEntity;
