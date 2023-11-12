const Pagos = require('../models/Pagos');
exports.crearPago = async(req,res)=>{
    try{
        let pagos;
        pagos = new Pagos(req.body);
        await pagos.save()
        res.send(pagos);
      }catch(error){
        console.log(error);
        res.status(500).send('[ERROR] No se pudo insertar el pago.');
      }
}
exports.obtenerPagoPorUsuarioId = async (req, res) => {
    const idUsuario = req.params.id; // Suponiendo que el ID del usuario está en los parámetros de la solicitud

    try {
        console.log('ID de usuario:', idUsuario); // Verificar que el ID del usuario está llegando correctamente

        const pagos = await Pagos.find({ idUsuario: idUsuario });

        console.log('Pagos encontrados:', pagos); // Ver si se encuentran pagos relacionados con ese usuario

        res.send(pagos);
    } catch (error) {
        console.error(error);
        res.status(500).send('[ERROR] No se pudieron obtener los pagos del usuario.');
    }
};



exports.obtenerPago = async(req,res)=>{
    
}