const mongoose = require('mongoose');
const TramitesSchema = new Schema({
    idTramite: {type:Number},
    Nombre: {type:String},
    Descripcion: {type:String},
    Costo: {type:Number}
  });
  module.exports = mongoose.model('Tramites', TramitesSchema);