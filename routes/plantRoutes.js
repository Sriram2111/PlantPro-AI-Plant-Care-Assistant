const express = require('express');
const router = express.Router();
const plantController = require('../controllers/plantController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', plantController.getAllPlants);
router.get('/:id', plantController.getPlant);
router.post('/', authMiddleware, plantController.addPlant);
router.put('/:plantId/diseases', authMiddleware, plantController.addDiseaseToPlant);

module.exports = router;