const express = require('express')

const tasksController = require('./controllers/tasksController');
const taskMiddlewares = require('./middlewares/taskMiddlewares');
const router = express.Router();

router.get('/tasks', tasksController.getAll);
router.post('/tasks', taskMiddlewares.validateFieldTitle, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id',
    taskMiddlewares.validateFieldTitle,
    taskMiddlewares.validateFieldStatus,
    tasksController.updateTask);

module.exports = router;