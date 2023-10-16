const mongoose = require('mongoose');
const CitaSchema = new Schema({
    idCita: Number,
    Fecha: Date,
    Hora: String,
    numTramite: Number,
    idUsuario: Number,
    idOficina: Number
  });
  module.exports = mongoose.model('Cita', CitaSchema);