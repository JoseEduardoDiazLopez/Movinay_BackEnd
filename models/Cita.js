const mongoose = require('mongoose');
const CitaSchema = new mongoose.Schema({
    idCita: {type: Number},
    Fecha: {type: String},
    Hora: {type: String},
    Modulo: {type: String},
    TipoTramite: {type: String},
    idUsuario: {type: String},
    idOficina: {type: Number}
  });
  module.exports = mongoose.model('Cita', CitaSchema);