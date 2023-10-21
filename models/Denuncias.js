const mongoose = require('mongoose');
const DenunciaSchema = new mongoose.Schema({
    idDenuncia: {type: Number},
    Fecha: {type: Date, default: Date.now()},
    Descripcion : {type: String},
    Foto: {type: String},
    Calles: {type: String},
    Colonia: {type: String},
    Municipio : {type: String}
  });
  module.exports = mongoose.model('Denuncia', DenunciaSchema);