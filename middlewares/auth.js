import { verifyToken } from '../utils/jwt.js';

export function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];

  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(403); 

  const user = verifyToken(token);
  if (!user) return res.sendStatus(403); 

  req.user = user;
  next();
}
