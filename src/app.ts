import express from 'express';
import cors from 'cors';
import equipmentRoutes from './routes/equipment.routes';

const app = express();

app.use(cors());
app.use(express.json());

// Registra o prefixo e o arquivo de rotas
app.use('/api/equipments', equipmentRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'API Tech-Inventory OS operando.' });
});

export default app;