const mongoose = require('mongoose');
const PedidosTramitesSchema = new Schema({
    idTramite: {type:Number},
    numTramite: {type:Number},
    fechaTramite: {type: Date, default: Date.now},
    idUsuario: {type:Number}
  });
  module.exports = mongoose.model('Pedidos', PedidosTramitesSchema);