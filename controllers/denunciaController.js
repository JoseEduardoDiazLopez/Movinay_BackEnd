const Denuncias = require("../models/Denuncias");

exports.crearDenuncia = async(req,res) =>{
  try{
    let denuncia;
    denuncia = new Denuncias(req.body);
    await denuncia.save()
    res.send(denuncia);
  }catch(error){
    console.log(error);
    res.status(500).send('[ERROR] No se pudo insertar la nueva denuncia.')
  }
}// get denuncia
exports.obtenerDenuncia = async (req,res) =>{
  try{
      const denuncias = await Denuncias.find();
      res.json(denuncias);
  }catch(error){
      console.log(error);
      res.status(500).send('[ERROR] No se pudo obtener las denuncias.')
  }
}