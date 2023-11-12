const User = require('../models/Usuario');
const jwt = require('jsonwebtoken');

// Registro de usuario
exports.register = async (req, res) => {
  try {
    const { username, password, email,RFC,nombre,ApellidoPaterno,ApellidoMaterno, FechaNac} = req.body;
    const user = new User({ username, password, email,RFC,nombre,ApellidoPaterno,ApellidoMaterno, FechaNac });
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
    const userId = user._id;
    return res.json({ userId});
  } else {
    return res.status(401).json({ error: 'Contraseña incorrecta, ingrese la correcta.' });
  }
};