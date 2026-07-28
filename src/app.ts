import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json()); // Permite ler JSON no corpo das requisições

// Rota de verificação de integridade (Health Check)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'API Tech-Inventory OS operando.' });
});

export default app;