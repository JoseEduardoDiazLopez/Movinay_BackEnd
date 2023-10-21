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
exports.obtenerDenunciaID = async (req, res) => {
  try {
    const id = req.params.id; // Obtén el _id desde los parámetros de la solicitud
    const denuncia = await Denuncias.findById(id); // Busca la denuncia por _id

    if (!denuncia) {
      return res.status(404).json({ msg: 'No se encontró la denuncia con el _id proporcionado.' });
    }

    res.json(denuncia); // Retorna los datos de la denuncia encontrada
  } catch (error) {
    console.log(error);
    res.status(500).send('[ERROR] No se pudo obtener la denuncia.');
  }
}

exports.obtenerDenuncia = async (req,res) =>{
  try{
      const denuncias = await Denuncias.find();
      res.json(denuncias);
  }catch(error){
      console.log(error);
      res.status(500).send('[ERROR] No se pudo obtener las denuncias.')
  }
}
exports.eliminarDenuncia = async(req,res)=>{
  try{
      let denun = await Denuncias.findById(req.params.id);
      if(!denun){
          res.status(404).json({msg:'No existe esa denuncia con ese id.'})
      }
      await Denuncias.findOneAndRemove({ _id: req.params.id })
      res.json({ msg: 'Denuncia eliminada.' });
  }catch(error){
      console.log(error);
      res.status(500).send('[ERROR] Hubo un error al tratar de intentar borrar este id.')
  }
}
exports.actualizarDenuncia = async (req, res) => {
  try {
    const { idDenuncia, Fecha, Descripcion, Foto, Calles, Colonia, Municipio } = req.body;
    const id = req.params.id; // Obtén el _id desde los parámetros de la solicitud

    const denunciaActualizada = await Denuncias.findByIdAndUpdate(
      id,
      {
        $set: {
          idDenuncia,
          Fecha,
          Descripcion,
          Foto,
          Calles,
          Colonia,
          Municipio,
        },
      },
      { new: true } // Para devolver la versión actualizada
    );

    if (!denunciaActualizada) {
      return res.status(404).json({ msg: 'No se encontró la denuncia con el _id proporcionado.' });
    }

    res.json(denunciaActualizada);
  } catch (error) {
    console.error(error);
    res.status(500).send('[ERROR] No se pudo actualizar la denuncia.');
  }
};