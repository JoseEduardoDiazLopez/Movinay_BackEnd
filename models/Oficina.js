const mongoose = require('mongoose');
const OficinaSchema = new Schema({
  idOficina: {type:Number},
  Nombre: {type:String},
  Direccion: {type:String},
  Telefono: {type:Number}
});
module.exports = mongoose.model('Oficina', OficinaSchema);