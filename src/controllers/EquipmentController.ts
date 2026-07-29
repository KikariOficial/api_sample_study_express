import { Request, Response } from 'express';
import Equipment from '../models/Equipment';

export class EquipmentController {
  // Método estático facilita o uso nas rotas sem precisar instanciar a classe
  static async create(req: Request, res: Response): Promise<any> {
    try {
      // Extrai os dados do corpo da requisição
      const equipmentData = req.body;

      // Cria e salva o documento no MongoDB
      const newEquipment = await Equipment.create(equipmentData);

      // Retorna status 201 (Created) e o objeto salvo
      res.status(201).json({
        message: 'Equipamento cadastrado com sucesso!',
        data: newEquipment
      });
    } catch (error: any) {
      // Em caso de erro (ex.: faltou um campo obrigatório), retorna 400 (Bad Request)
      res.status(400).json({
        message: 'Erro ao cadastrar equipamento',
        error: error.message
      });
    }
  }
}