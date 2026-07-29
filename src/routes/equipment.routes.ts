import { Router } from 'express';
import { EquipmentController } from '../controllers/EquipmentController';

const router = Router();

// Quando houver um POST na raiz dessa rota, executa o método create
router.post('/', EquipmentController.create);

export default router;