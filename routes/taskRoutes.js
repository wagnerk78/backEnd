import express from 'express';
import { createTask, getUserTasks } from '../controllers/taskController.js';
import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();

router.post('/', authenticateToken, createTask);
router.get('/', authenticateToken, getUserTasks);

export default router;
