const express = require('express');
const taskController = require('../controller/task.controller');
const auth = require('../middleware/auth.middleware');
const router = new express.Router();

router.post('/',auth,taskController.addTask);
router.get('/',auth,taskController.getTask);
router.get('/:id',auth,taskController.viewTAsk);
router.patch('/:id',auth,taskController.updateTask);
router.delete('/:id',auth,taskController.deleteTask);
module.exports = router;