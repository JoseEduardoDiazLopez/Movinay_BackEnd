const mongoose = require('mongoose');
const PagosSchema = new Schema({
    idPago: {type:Number},
    tipoPago: {type:String},
    Cantidad: {type:Number},
    Fecha: {type:Date, default: Date.now},
    numTramite: {type:Number},
    numReferencia: {type:String}
  });
  module.exports = mongoose.model('Pagos', PagosSchema);