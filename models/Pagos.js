const mongoose = require('mongoose');

const PagosSchema = new mongoose.Schema({
    idPago : Number,
    idUsuario: String,
    TipoPago: String,
    Fecha: String,
    Concepto : String,
    Cantidad : String,
    numTarjeta : String,
    nombreTarjeta : String,
    FechaTarjeta : String,
    CVV : String,
    EstadoPago: String
});
module.exports = mongoose.model('Pagos', PagosSchema);
