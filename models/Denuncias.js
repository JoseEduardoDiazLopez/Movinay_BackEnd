const mongoose = require('mongoose');
const DenunciaSchema = new mongoose.Schema({
    idDenuncia: {type: Number},
    Fecha: {type: Date, default: Date.now()},
    Hora: {type: Date.getTime()},
    Descripcion : {type: String},
    TipoDenuncia: {type: String}
  });
  module.exports = mongoose.model('Denuncia', DenunciaSchema);