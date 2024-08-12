import { Router } from 'express';
import { TodoController } from '../controllers/todoController';

const router = Router();
const todoController = new TodoController();

router.get('/todos', todoController.getAll);
router.get('/todos/:id', todoController.getById);
router.post('/todos', todoController.create);
router.put('/todos/:id', todoController.update);
router.delete('/todos/:id', todoController.delete);

export default router;
