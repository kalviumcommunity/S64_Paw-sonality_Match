const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const dogBreedRoutes = require("./routes/dogBreed");
const quizRoutes = require("./routes/quiz");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/dogbreeds", dogBreedRoutes);
app.use("/api/quiz", quizRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Paw-sonality Match");
});

// In-memory storage for entities
let entities = [];
let id = 1;

// Function to validate entity name
const validateName = (name) => {
  if (!name || typeof name !== "string" || name.trim() === "") {
    return "Name is required and must be a non-empty string.";
  }
  if (name.length < 3) {
    return "Name must be at least 3 characters long.";
  }
  if (name.length > 50) {
    return "Name must not exceed 50 characters.";
  }
  if (!/^[a-zA-Z0-9\s]+$/.test(name)) {
    return "Name can only contain letters, numbers, and spaces.";
  }
  return null;
};

// Get all entities
app.get("/entities", (req, res) => {
  res.json(entities);
});

// Add new entity with validation
app.post("/entities", (req, res) => {
  const { name } = req.body;
  const validationError = validateName(name);

  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  // Check if entity name already exists
  if (entities.some((entity) => entity.name.toLowerCase() === name.trim().toLowerCase())) {
    return res.status(400).json({ error: "Entity name already exists." });
  }

  const newEntity = { id: id++, name: name.trim() };
  entities.push(newEntity);
  res.status(201).json(newEntity);
});

// Update entity with validation
app.put("/entities/:id", (req, res) => {
  const entityId = parseInt(req.params.id);
  const { name } = req.body;
  const entityIndex = entities.findIndex((entity) => entity.id === entityId);

  if (entityIndex === -1) {
    return res.status(404).json({ error: "Entity not found" });
  }

  const validationError = validateName(name);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  // Check if the updated name already exists (excluding the current entity)
  if (
    entities.some(
      (entity, index) =>
        index !== entityIndex && entity.name.toLowerCase() === name.trim().toLowerCase()
    )
  ) {
    return res.status(400).json({ error: "Entity name already exists." });
  }

  entities[entityIndex].name = name.trim();
  res.json(entities[entityIndex]);
});

// Delete entity
app.delete("/entities/:id", (req, res) => {
  const entityId = parseInt(req.params.id);
  const initialLength = entities.length;
  entities = entities.filter((entity) => entity.id !== entityId);

  if (entities.length < initialLength) {
    res.json({ message: "Entity deleted successfully" });
  } else {
    res.status(404).json({ error: "Entity not found" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
