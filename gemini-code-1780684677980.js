// middleware/auth.js
const jwt = require('jsonwebtoken');

const verifyToken = (roles = []) => (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send("Acceso denegado");

  try {
    const verified = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    req.user = verified;
    
    // Verificación de roles (Administrador, Carga, Consulta)
    if (roles.length && !roles.includes(req.user.role)) {
      return res.status(401).send("No autorizado para esta acción");
    }
    next();
  } catch (err) {
    res.status(400).send("Token inválido");
  }
};