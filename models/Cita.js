const mongoose = require('mongoose');
const CitaSchema = new mongoose.Schema({
    idCita: {type: Number},
    Fecha: {type: Date, default: Date.now()},
    Hora: {type: String},
    numTramite: {type: String},
    idUsuario: {type: Number},
    idOficina: {type: Number}
  });
  module.exports = mongoose.model('Cita', CitaSchema);