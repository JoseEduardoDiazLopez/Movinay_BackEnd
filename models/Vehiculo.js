const mongoose = require('mongoose');
const VehiculoSchema = new Schema({
    idUsuario: Number,
    idVehiculo: Number,
    TipoVehiculo: String,
    Modelo: String,
    Color: String,
    Placas: String
  });
  module.exports = mongoose.model('Vehiculo', VehiculoSchema);