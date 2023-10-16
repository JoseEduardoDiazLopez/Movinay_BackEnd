const mongoose = require('mongoose');
const TramitesSchema = new Schema({
    idTramite: Number,
    Nombre: String,
    Descripcion: String,
    Costo: Number
  });
  module.exports = mongoose.model('Tramites', TramitesSchema);