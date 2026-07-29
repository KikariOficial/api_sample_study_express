import mongoose from 'mongoose';

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  // Verifica se a string existe antes de prosseguir
  if (!uri) {
    console.error('❌ FATAL ERROR: MONGO_URI não está definida no arquivo .env');
    process.exit(1); // Derruba a aplicação imediatamente
  }

  try {
    const conn = await mongoose.connect(uri);
    console.log(`✅ MongoDB Conectado: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`❌ Erro de Conexão: ${error.message}`);
    process.exit(1);
  }
};