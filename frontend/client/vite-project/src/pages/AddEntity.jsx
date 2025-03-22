import { useState, useEffect } from "react";

const AddEntity = () => {
  const [name, setName] = useState("");
  const [entities, setEntities] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/entities")
      .then((res) => res.json())
      .then((data) => setEntities(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEntity = { name };

    const res = await fetch("http://localhost:5000/entities", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEntity),
    });

    if (res.ok) {
      const addedEntity = await res.json();
      setEntities((prev) => [...prev, addedEntity]);
      setName("");
    }
  };

  const handleEdit = (entity) => {
    setEditId(entity.id);
    setEditName(entity.name);
  };

  const handleUpdate = async () => {
    if (!editId) return;

    const res = await fetch(`http://localhost:5000/entities/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: editName }),
    });

    if (res.ok) {
      setEntities((prev) =>
        prev.map((entity) =>
          entity.id === editId ? { ...entity, name: editName } : entity
        )
      );
      setEditId(null);
      setEditName("");
    }
  };

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:5000/entities/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setEntities((prev) => prev.filter((entity) => entity.id !== id));
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.heading}>Manage Entities</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter entity name"
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>Add</button>
        </form>

        {editId && (
          <div style={styles.editContainer}>
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              style={styles.input}
            />
            <button onClick={handleUpdate} style={styles.button}>Save</button>
          </div>
        )}

        <ul style={styles.list}>
          {entities.map((entity) => (
            <li key={entity.id} style={styles.listItem}>
              <span>{entity.name}</span>
              <div>
                <button onClick={() => handleEdit(entity)} style={styles.editButton}>Edit</button>
                <button onClick={() => handleDelete(entity.id)} style={styles.deleteButton}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  content: {
    width: "60%",
    minHeight: "70vh",
    padding: "30px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "12px",
    width: "60%",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "12px 18px",
    backgroundColor: '#ff6f61',
    color: '#fff',
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background 0.3s ease",
  },
  editContainer: {
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "20px",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    marginBottom: "10px",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
    fontSize: "18px",
    color: "black",
  },
  editButton: {
    padding: "8px 12px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "5px",
    fontSize: "14px",
    transition: "background 0.3s ease",
  },
  deleteButton: {
    padding: "8px 12px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background 0.3s ease",
  },
};

export default AddEntity;
