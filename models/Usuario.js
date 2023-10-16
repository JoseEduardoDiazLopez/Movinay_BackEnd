const mongoose = require('mongoose');
const UsuarioSchema = new Schema({
    idUsuario: {type:Number},
    Nombre: {type:String},
    ApellidoP: {type:String},
    ApellidoM: {type:String},
    Email: {type:String},
    Contraseña: {type:String},
    Curp: {type:String}
  });
module.exports = mongoose.model('Usuario', UsuarioSchema);