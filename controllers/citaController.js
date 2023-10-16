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
}// get cita
exports.obtenerCita = async (req,res) =>{
  try{
      const citas = await Citas.find();
      res.json(citas);
  }catch(error){
      console.log(error);
      res.status(500).send('Hubo un error al obtener citas.')
  }
}