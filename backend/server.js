const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const dogBreedRoutes = require("./routes/dogBreed");
const quizRoutes = require("./routes/quiz");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/dogbreeds', dogBreedRoutes);
app.use('/api/quiz', quizRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Paw-sonality Match");
});

// In-memory storage for entities
let entities = [];
let id = 1;

// Get all entities
app.get('/entities', (req, res) => {
  res.json(entities);
});

// Add new entity
app.post('/entities', (req, res) => {
  const { name } = req.body;
  const newEntity = { id: id++, name };
  entities.push(newEntity);
  res.status(201).json(newEntity);
});

// Update entity
app.put('/entities/:id', (req, res) => {
  const entityId = parseInt(req.params.id);
  const { name } = req.body;
  const entityIndex = entities.findIndex(entity => entity.id === entityId);

  if (entityIndex !== -1) {
    entities[entityIndex].name = name;
    res.json(entities[entityIndex]);
  } else {
    res.status(404).json({ message: "Entity not found" });
  }
});

// Delete entity
app.delete('/entities/:id', (req, res) => {
  const entityId = parseInt(req.params.id);
  const initialLength = entities.length;
  entities = entities.filter(entity => entity.id !== entityId);

  if (entities.length < initialLength) {
    res.json({ message: "Entity deleted successfully" });
  } else {
    res.status(404).json({ message: "Entity not found" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
