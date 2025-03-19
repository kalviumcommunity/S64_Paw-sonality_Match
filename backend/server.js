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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
