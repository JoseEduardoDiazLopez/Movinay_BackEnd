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
});
/*PagosSchema.pre('save', async function (next) {
    const doc = this;

    if (!doc.idPago) {
        try {
            const latestPago = await mongoose.model('Pagos', PagosSchema).findOne({}, {}, { sort: { 'idPago': -1 } });
            if (latestPago) {
                doc.idPago = latestPago.idPago + 1;
            } else {
                doc.idPago = 1; // Si no hay pagos en la base de datos, empieza desde 1
            }
        } catch (error) {
            return next(error);
        }
    }

    if (!doc.numReferencia) {
        const referenciaBase = 'TPCNAY00-'; // Parte fija de la referencia
        const randomNumber = Math.floor(1000 + Math.random() * 9000); // Genera un número aleatorio de 4 dígitos

        doc.numReferencia = referenciaBase + randomNumber;
    }

    next();
});*/

module.exports = mongoose.model('Pagos', PagosSchema);
