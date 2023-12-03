const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  RFC: String,
  nombre: String,
  ApellidoPaterno: String,
  ApellidoMaterno: String,
  FechaNac : String,
  Rol : String
});

module.exports = mongoose.model('User', userSchema);
