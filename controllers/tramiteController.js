const Tramite = require("../models/Tramites");
exports.crearTramite = async(req,res) =>{
    try{
      let tramite;
      tramite = new Tramite(req.body);
      await tramite.save()
      res.send(tramite);
    }catch(error){
      console.log(error);
      res.status(500).send('Hubo un error al colocar los tramites.')
    }
  }// crear Tramite
exports.obtenerTramites = async (req,res) =>{
    try{
        const tramites = await Tramite.find();
        res.json(tramites);
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al obtener los tramites correspondientes.')
    }
}
exports.obtenerTramitePorTipo = async (req, res) => {
    const TipoTramite = req.params.TipoTramite;

    try {
        const tramite = await Tramite.findOne({ TipoTramite: TipoTramite });

        if (!tramite) {
            return res.status(404).json({ mensaje: `Trámite con TipoTramite '${TipoTramite}' no encontrado.` });
        }

        res.json({ Costo: tramite.Costo });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al obtener el trámite por TipoTramite.');
    }
}