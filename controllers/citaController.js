const Citas = require("../models/Cita");
const Pagos = require("../models/Pagos");
exports.crearCita = async(req,res) =>{
  try{
    let cita;
    cita = new Citas(req.body);
    await cita.save()
    res.send(cita);
  }catch(error){
    console.log(error);
    res.status(500).send('Hubo un error al colocar citas.')
  }
}// crear cita

exports.obtenerCita = async (req,res) =>{
  try{
      const citas = await Citas.find();
      res.json(citas);
  }catch(error){
      console.log(error);
      res.status(500).send('Hubo un error al obtener citas.')
  }
}

exports.obtenerCitaID = async (req, res) => {
  try {
    const id = req.params.id; // Obtén el _id desde los parámetros de la solicitud
    const cita = await Citas.findById(id); // Busca la denuncia por _id

    if (!cita) {
      return res.status(404).json({ msg: 'No se encontró la cita con el _id proporcionado.' });
    }

    res.json(cita); // Retorna los datos de la cita encontrada
  } catch (error) {
    console.log(error);
    res.status(500).send('[ERROR] No se pudo obtener la cita.');
  }
}

exports.obtenerCitaUsuario = async (req, res) => {
  try {
    const id = req.params.id; // Obtén el _id desde los parámetros de la solicitud
    const cita = await Citas.findOne({ idUsuario: id });

    if (!cita) {
      return res.status(404).json({ msg: 'No se encontró la cita con el _id proporcionado.' });
    }

    const idUsuario = cita.idUsuario; 
    res.json({ idUsuario}); // Retorna el valor de idUsuario de la cita encontrada
  } catch (error) {
    console.log(error);
    res.status(500).send('[ERROR] No se pudo obtener la cita.');
  }
}
exports.obtenerCitasUsuario = async (req, res) => {
  try {
    const id = req.params.id; // Obtén el _id desde los parámetros de la solicitud
    const cita = await Citas.find({ idUsuario: id });

    if (!cita) {
      return res.status(404).json({ msg: 'No se encontró la cita con el _id proporcionado.' });
    }

    res.json(cita); // Retorna todos los campos de la cita encontrada
  } catch (error) {
    console.log(error);
    res.status(500).send('[ERROR] No se pudo obtener la cita.');
  }
}
exports.obtenerCitasUsuario = async (req, res) => {
  try {
    const id = req.params.id; // Obtén el _id desde los parámetros de la solicitud
    const cita = await Citas.find({ idUsuario: id });

    if (!cita) {
      return res.status(404).json({ msg: 'No se encontró la cita con el _id proporcionado.' });
    }

    res.json(cita); // Retorna todos los campos de la cita encontrada
  } catch (error) {
    console.log(error);
    res.status(500).send('[ERROR] No se pudo obtener la cita.');
  }
}
exports.actualizarEstadoCita = async (req, res) => {
  try {
    const idCita = req.params.id;
    const estado = req.body.EstadoCita;

    // Actualiza el estado de la cita en la base de datos
    await Citas.findByIdAndUpdate(idCita, { EstadoCita: estado });

    // Busca el idUsuario directamente usando el req.params.id
    const cita = await Citas.findById(idCita);

    // Si el estado es "Validado", crea un nuevo pago
    if (estado === 'Validado') {
      // Genera el idPago automáticamente
      const nuevoPago = {
        idUsuario: cita.idUsuario,
        idPago: await generarIdPago(),
      };

      // Guarda el nuevo pago en la base de datos
      const pagoCreado = await Pagos.create(nuevoPago);

      // Envía una respuesta JSON con información adicional si es necesario
      res.json({ message: 'Estado de cita validado correctamente', nuevoPago: pagoCreado });
    } else {
      // Si el estado no es "Validado", simplemente envía un mensaje de éxito
      res.json({ message: 'Estado de cita actualizado correctamente' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Error al actualizar el estado de la cita');
  }
};





// Función para generar un ID de pago (puedes ajustar según tus necesidades)
async function generarIdPago() {
  const ultimoPago = await Pagos.findOne().sort({ idPago: -1 });

  // Si no hay pagos, establece el idPago en 1
  if (!ultimoPago) {
    return 1;
  }

  // Si hay pagos, genera el idPago sumando 1 al máximo existente
  return ultimoPago.idPago + 1;
}
