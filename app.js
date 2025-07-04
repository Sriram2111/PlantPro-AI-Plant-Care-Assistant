const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample plant data (in a real app, this would come from a database)
const plants = [
  {
    id: 1,
    name: 'Venus Flytrap',
    careTips: 'Requires bright, indirect sunlight and moist soil. Feed with insects sparingly.',
    image: 'venus-flytrap.jpg',
    diseases: [
      { name: 'Mold', symptoms: 'Fuzzy growth on soil', treatment: ' Improve air circulation and reduce watering.' }
    ]
  },
  {
    id: 2,
    name: 'Daisy',
    careTips: 'Needs full sun and well-drained soil. Water moderately.',
    image: 'daisy.jpg',
    diseases: [
      { name: 'Rust', symptoms: 'Orange spots on leaves', treatment: 'Remove affected leaves and use fungicide.' }
    ]
  }
];

// Get all plants
app.get('/api/plants', (req, res) => {
  res.json(plants);
});

// Get a specific plant by ID
app.get('/api/plants/:id', (req, res) => {
  const plant = plants.find(p => p.id === parseInt(req.params.id));
  if (!plant) return res.status(404).json({ message: 'Plant not found' });
  res.json(plant);
});

// Add a new plant (for admin users, in a real app this would require authentication)
app.post('/api/plants', (req, res) => {
  const newPlant = {
    id: plants.length + 1,
    name: req.body.name,
    careTips: req.body.careTips,
    image: req.body.image,
    diseases: req.body.diseases || []
  };
  plants.push(newPlant);
  res.status(201).json(newPlant);
});

// Update a plant
app.put('/api/plants/:id', (req, res) => {
  const plantIndex = plants.findIndex(p => p.id === parseInt(req.params.id));
  if (plantIndex === -1) return res.status(404).json({ message: 'Plant not found' });

  plants[plantIndex] = {
    ...plants[plantIndex],
    ...req.body,
    id: parseInt(req.params.id)
  };
  res.json(plants[plantIndex]);
});

// Delete a plant
app.delete('/api/plants/:id', (req, res) => {
  const plantIndex = plants.findIndex(p => p.id === parseInt(req.params.id));
  if (plantIndex === -1) return res.status(404).json({ message: 'Plant not found' });

  plants.splice(plantIndex, 1);
  res.status(204).send();
});

// Start the server
app.listen(port, () => {
  console.log(`Plant Pro API listening at http://localhost:${port}`);
});