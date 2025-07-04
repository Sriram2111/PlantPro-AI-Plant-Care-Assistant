const express = require('express');
const router = express.Router();
const diseaseController = require('../controllers/diseaseController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', diseaseController.getAllDiseases);
router.get('/:id', diseaseController.getDisease);
router.post('/', authMiddleware, diseaseController.addDisease);
router.put('/:id', authMiddleware, diseaseController.updateDisease);
router.delete('/:id', authMiddleware, diseaseController.deleteDisease);

module.exports = router;