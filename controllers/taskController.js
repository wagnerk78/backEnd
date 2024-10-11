import prisma from '../prisma/client.js';

const VALID_PRIORITIES = ['Alta', 'Media', 'Baixa'];

export async function createTask(req, res) {
  const { descricao, prioridade } = req.body;
  const { id: userId } = req.user;

  if (!VALID_PRIORITIES.includes(prioridade)) {
    return res.status(400).json({ error: 'Prioridade inválida. Use: Alta, Media ou Baixa.' });
  }

  const task = await prisma.task.create({
    data: {
      descricao,
      prioridade,
      userId,
    },
  });

  res.status(201).json({ message: 'Tarefa criada com sucesso', task });
}

export async function getUserTasks(req, res) {
  const { id: userId } = req.user;

  const tasks = await prisma.task.findMany({
    where: { userId },
  });

  res.status(200).json(tasks);
}

export async function completeTask(req, res) {
  const { taskId } = req.params;

  const updatedTask = await prisma.task.update({
    where: { id: taskId },
    data: { completed: true },
  });

  res.status(200).json({ message: 'Tarefa marcada como concluída', task: updatedTask });
}
