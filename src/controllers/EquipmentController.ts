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
  // Buscar TODOS os equipamentos
  static async getAll(req: Request, res: Response): Promise<any> {
    try {
      // O método .find() sem filtros traz todos os documentos da coleção
      const equipments = await Equipment.find();
      
      res.status(200).json(equipments);
    } catch (error: any) {
      res.status(500).json({
        message: 'Erro interno ao buscar equipamentos',
        error: error.message
      });
    }
  }

  // Buscar UM equipamento específico pelo ID
  static async getById(req: Request, res: Response): Promise<any> {
    try {
      // Extraímos o 'id' dos parâmetros da URL (ex: /api/equipments/12345)
      const { id } = req.params;

      const equipment = await Equipment.findById(id);

      // Se o Mongoose não achar nada, ele retorna null
      if (!equipment) {
        res.status(404).json({ message: 'Equipamento não encontrado.' });
        return; // O return impede que o código continue e tente enviar outra resposta
      }

      res.status(200).json(equipment);
    } catch (error: any) {
      // Se o ID enviado não for um ObjectId válido do MongoDB, ele cai no catch
      res.status(400).json({
        message: 'ID inválido ou erro na busca.',
        error: error.message
      });
    }
  }
}
