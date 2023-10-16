const mongoose = require('mongoose');
const ReferenciasSchema = new Schema({
    idReferencia: Number,
    Fecha: Date,
    numReferencia: String,
    idUsuario: Number
  });
  module.exports = mongoose.model('Referencias', ReferenciasSchema);