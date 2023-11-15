const mongoose = require('mongoose');
const CitaSchema = new mongoose.Schema({
    idCita: {type: Number},
    Fecha: {type: String},
    Hora: {type: String},
    Modulo: {type: String},
    TipoTramite: {type: String},
    idUsuario: {type: String},
    EstadoCita: {type: String},
    Turno: {type:String}
  });
  CitaSchema.pre('save', async function (next) {
    const doc = this;
    if (!doc.idCita) {
        try {
            const latestCita = await mongoose.model('Cita', CitaSchema).findOne({}, {}, { sort: { 'idCita': -1 } });
            if (latestCita) {
                doc.idCita = latestCita.idCita + 1;
            } else {
                doc.idCita = 1; // Si no hay citas en la base de datos, empieza desde 1
            }
            const year = new Date().getFullYear();
            const randomNum = Math.floor(Math.random() * 100) + 1;
            const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
            doc.Turno = `${randomLetter}${randomLetter}${randomLetter}${year}${randomNum}`;
            doc.EstadoCita = "En proceso";
            next();
        } catch (error) {
            next(error);
        }
    } else {
        next();
    }
});
  module.exports = mongoose.model('Cita', CitaSchema);