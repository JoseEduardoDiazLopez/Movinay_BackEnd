const mongoose = require('mongoose');
const PagosSchema = new Schema({
    idPago: Number,
    tipoPago: String,
    Cantidad: Number,
    Fecha: Date,
    numTramite: Number,
    numReferencia: String
  });
  module.exports = mongoose.model('Pagos', PagosSchema);