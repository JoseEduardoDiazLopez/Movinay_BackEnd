const mongoose = require('mongoose');
const TramitesSchema = new mongoose.Schema({
    TipoTramite: String,
    Costo: Number
});
module.exports = mongoose.model('Tramites', TramitesSchema);
