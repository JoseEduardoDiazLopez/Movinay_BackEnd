const mongoose = require('mongoose');
const ReferenciasSchema = new Schema({
    idReferencia: {type:Number},
    Fecha: {type:Date , default: Date.now},
    numReferencia: {type:String},
    idUsuario: {type:Number}
  });
  module.exports = mongoose.model('Referencias', ReferenciasSchema);