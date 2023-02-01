const express = require('express')

const tasksController = require('./controllers/tasksController');
const taskMiddlewares = require('./middlewares/taskMiddlewares');
const router = express.Router();

router.get('/tasks', tasksController.getAll);
router.post('/tasks', taskMiddlewares.validateBody, tasksController.createTask);

module.exports = router;