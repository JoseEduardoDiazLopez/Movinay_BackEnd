const mongoose = require('mongoose');
const UsuarioSchema = new Schema({
    idUsuario: Number,
    Nombre: String,
    ApellidoP: String,
    ApellidoM: String,
    Email: String,
    Contraseña: String,
    Curp: String
  });
module.exports = mongoose.model('Usuario', UsuarioSchema);