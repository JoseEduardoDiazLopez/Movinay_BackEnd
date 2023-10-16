const mongoose = require('mongoose');
const OficinaSchema = new Schema({
  idOficina: Number,
  Nombre: String,
  Direccion: String,
  Telefono: Number
});
module.exports = mongoose.model('Oficina', OficinaSchema);