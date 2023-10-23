const mongoose = require('mongoose');
const CitaSchema = new mongoose.Schema({
    idCita: {type: Number},
    Fecha: {type: String},
    Hora: {type: String},
    numTramite: {type: String},
    idUsuario: {type: Number},
    idOficina: {type: Number}
  });
  module.exports = mongoose.model('Cita', CitaSchema);