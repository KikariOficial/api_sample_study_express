import mongoose, { Schema, Document } from 'mongoose';

// Interface TypeScript: Garante a tipagem nos Controllers e Services
export interface IEquipment extends Document {
  name: string;
  category: 'Sensor' | 'Atuador' | 'Display' | 'Microcontrolador' | 'Outro';
  status: 'Ativo' | 'Em Uso' | 'Manutenção' | 'Quebrado';
  location: string;
  technicalSpecs: Record<string, any>; // Flexibilidade para atributos específicos
  createdAt: Date;
  updatedAt: Date;
}

// Mongoose Schema: Regras e validações que o banco fará antes de salvar
const EquipmentSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'O nome do equipamento é obrigatório'],
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['Sensor', 'Atuador', 'Display', 'Microcontrolador', 'Outro'],
    },
    status: {
      type: String,
      enum: ['Ativo', 'Em Uso', 'Manutenção', 'Quebrado'],
      default: 'Ativo',
    },
    location: {
      type: String,
      default: 'Estoque Principal',
    },
    technicalSpecs: {
      type: Map, // permite salvar pares chave-valor arbitrários
      of: Schema.Types.Mixed,
      default: {},
    }
  },
  {
    timestamps: true, // adiciona automaticamente createdAt e updatedAt
  }
);

// exporta o Model pronto para uso
export default mongoose.model('Equipment', EquipmentSchema);