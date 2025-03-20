
const express = require('express');
const cors = require('cors');



const app = express();
app.use(express.json());
app.use(cors());


let entities = [];
let id = 1;

app.get('/entities', (req, res) => {
  res.json(entities);
});

app.post('/entities', (req, res) => {
  const { name } = req.body;
  const newEntity = { id: id++, name };
  entities.push(newEntity);
  res.status(201).json(newEntity);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
