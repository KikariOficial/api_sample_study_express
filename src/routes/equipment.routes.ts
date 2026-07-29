import { Router } from 'express';
import { EquipmentController } from '../controllers/EquipmentController';

const router = Router();

// Rota POST (Criar) - que você já tinha
router.post('/', EquipmentController.create);

// Rota GET (Listar todos)
router.get('/', EquipmentController.getAll);

// Rota GET (Buscar por ID)
// O :id indica que qualquer valor após a barra será tratado como o parâmetro 'id'
router.get('/:id', EquipmentController.getById);

export default router;