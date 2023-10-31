const Citas = require("../models/Cita");

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

