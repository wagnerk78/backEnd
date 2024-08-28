import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key';

export function generateToken(user) {
  return jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
    expiresIn: '1h',
  });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (e) {
    return null;
  }
}
