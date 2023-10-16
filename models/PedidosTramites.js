const mongoose = require('mongoose');
const PedidosTramitesSchema = new Schema({
    idTramite: Number,
    numTramite: Number,
    fechaTramite: Date,
    idUsuario: Number
  });
  module.exports = mongoose.model('Pedidos', PedidosTramitesSchema);