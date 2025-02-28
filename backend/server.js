require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(cors());  
app.use('/api', routes);

// Connect to MongoDB Atlas
connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to Paw-sonality Match");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port http://localhost:${PORT}`));