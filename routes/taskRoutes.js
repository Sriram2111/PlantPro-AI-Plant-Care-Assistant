const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, taskController.getTasks);
router.post('/', authMiddleware, taskController.addTask);

module.exports = router;