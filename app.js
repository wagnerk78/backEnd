import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import taskRoutes from './routes/taskRoutes.js';

const app = express();
app.use(cors());

app.use(express.json());
app.use('/usuarios', userRoutes);
app.use('/tarefas', taskRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
