import prisma from '../prisma/client.js';
import { hashPassword, comparePassword } from '../utils/hash.js';
import { generateToken } from '../utils/jwt.js';

export async function createUser(req, res) {
  const { name, email, password } = req.body;

  // Verifica se o e-mail já está em uso
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return res.status(400).json({ error: 'E-mail já está em uso' });
  }

  const hashedPassword = await hashPassword(password);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const token = generateToken(user);
  res.status(201).json({ message: 'Usuário criado com sucesso', token });
}

export async function getUsers(req, res) {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
}

// Função de login
export async function loginUser(req, res) {
    const { email, password } = req.body;
  
    // Verifica se o usuário existe
    const user = await prisma.user.findUnique({
      where: { email },
    });
  
    if (!user) {
      return res.status(401).json({ error: 'E-mail ou senha incorretos' });
    }
  
    // Verifica se a senha está correta
    const isPasswordValid = await comparePassword(password, user.password);
  
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'E-mail ou senha incorretos' });
    }
  
    // Gera o token JWT
    const token = generateToken(user);
  
    res.status(200).json({ message: 'Login bem-sucedido', token });
  }