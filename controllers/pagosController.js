const Pagos = require('../models/Pagos');
const Cita = require('../models/Cita');
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
exports.obtenerPagos = async (req,res) =>{
  try{
      const pagos = await Pagos.find();
      res.json(pagos);
  }catch(error){
      console.log(error);
      res.status(500).send('Hubo un error al obtener pagos.')
  }
}
/*exports.obtenerPagoPorUsuarioId = async (req, res) => {
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
};*/
exports.obtenerPagoPorUsuarioId = async (req, res) => {
    const idUsuario = req.params.id; // Suponiendo que el ID del usuario está en los parámetros de la solicitud

    try {
        console.log('ID de usuario:', idUsuario); // Verificar que el ID del usuario está llegando correctamente

        // Buscar todas las citas relacionadas con el idUsuario
        const citas = await Cita.find({ idUsuario: idUsuario });

        console.log('Citas encontradas:', citas); // Ver si se encuentran citas relacionadas con ese usuario

        // Extraer los tipos de trámite de las citas encontradas
        const tiposTramite = citas.map(cita => cita.TipoTramite);

        console.log('Tipos de Trámite encontrados:', tiposTramite);

        res.send({ tiposTramite });
    } catch (error) {
        console.error(error);
        res.status(500).send('[ERROR] No se pudieron obtener los tipos de trámite del usuario.');
    }
};
exports.completarInformacionPago = async (req, res) => {
    try {
      const idUsuario = req.params.idUsuario;
  
      // Busca el último pago del usuario en la base de datos
      const ultimoPago = await Pagos.findOne({ idUsuario }).sort({ idPago: -1 });
  
      if (!ultimoPago) {
        return res.status(404).json({ message: 'No se encontraron pagos para el usuario proporcionado' });
      }
  
      // Agrega los campos faltantes al último pago encontrado
      ultimoPago.TipoPago = req.body.TipoPago;
      ultimoPago.Fecha = obtenerFechaActual(); // Debes implementar la función obtenerFechaActual()
      ultimoPago.Concepto = req.body.Concepto;
      ultimoPago.Cantidad = req.body.Cantidad;
      ultimoPago.numTarjeta = req.body.numTarjeta;
      ultimoPago.nombreTarjeta = req.body.nombreTarjeta;
      ultimoPago.FechaTarjeta = req.body.FechaTarjeta;
      ultimoPago.CVV = req.body.CVV;
      ultimoPago.EstadoPago = req.body.EstadoPago;
      // Guarda el pago actualizado en la base de datos
      const pagoActualizado = await ultimoPago.save();
  
      const TipoTramite = req.body.Concepto; // Suponiendo que Concepto es el TipoTramite en la tabla Cita
      await Cita.deleteOne({ idUsuario, TipoTramite });
      
      res.json({ message: 'Información del pago actualizada correctamente', pago: pagoActualizado });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al completar la información del pago');
    }
  };
  
  // Función para obtener la fecha actual en un formato deseado
  function obtenerFechaActual() {
    const fechaActual = new Date();
    // Implementa la lógica para formatear la fecha según tus necesidades
    // Por ejemplo, podrías usar bibliotecas como `moment` o `date-fns` para formatear la fecha
    return fechaActual.toISOString();
  }