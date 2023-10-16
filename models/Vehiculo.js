const mongoose = require('mongoose');
const VehiculoSchema = new Schema({
    idUsuario: {type:Number},
    idVehiculo: {type:Number},
    TipoVehiculo: {type:String},
    Modelo: {type:String},
    Color: {type:String},
    Placas: {type:String}
  });
  module.exports = mongoose.model('Vehiculo', VehiculoSchema);