const User = require('../models/Usuario');
const jwt = require('jsonwebtoken');

// Registro de usuario
exports.register = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const user = new User({ username, password, email });
    await user.save();
    res.json({ message: 'Usuario registrado con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Inicio de sesión
exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  if (user.password === password) {
    const token = jwt.sign({ username }, 'secret_key');
    return res.json({ token: "Se inicio sesión."});
  } else {
    return res.status(401).json({ error: 'Contraseña incorrecta, ingrese la correcta.' });
  }
};
