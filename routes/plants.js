const express = require('express');
const router = express.Router();
const Plant = require('../models/Plant.js'); // Ensure the path is correct

console.log('i am here in plants.js');
// Get all plantsc
router.get('/', (req, res) => {
    Plant.find()
    console.log('GET /plants called') // Debugging log
        .then(plants => {
            console.log('Plants found:', plants); // Log found plants
            res.json(plants);})
        .catch(err => {
            console.log('Error in GET /plants:', err); // Log error

            res.status(500).json({ error: 'An error occurred while getting plants.' });
        });
});

// Add a new plant
router.post('/add', (req, res) => {
    console.log('POST /plants/add called'); // Debugging log    
    const newPlant = new Plant(req.body);

    newPlant.save()
        .then(() => {
            console.log('New plant added'); // Log success
            res.json('Plant added!');
        })
        .catch(err => {
            console.error('Error adding plant:', err);
            res.status(500).json({ error: 'An error occurred while adding the plant.' });
        });
});

module.exports = router;
