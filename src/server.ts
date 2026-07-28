import 'dotenv/config';
import app from './app';
import { connectDB } from './config/database';

const PORT = process.env.PORT || 3333;

// Conecta ao banco de dados e depois levanta o servidor
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
  });
});