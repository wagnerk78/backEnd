import express from 'express';
import { createTask, getUserTasks, completeTask } from '../controllers/taskController.js';
import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();

router.post('/', authenticateToken, createTask);
router.get('/', authenticateToken, getUserTasks);
router.patch('/:taskId/complete', authenticateToken, completeTask); // Nova rota

export default router;
