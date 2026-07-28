import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`✅ MongoDB Conectado: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`❌ Erro de Conexão: ${error.message}`);
    process.exit(1); // Encerra a aplicação caso o banco não conecte
  }
};