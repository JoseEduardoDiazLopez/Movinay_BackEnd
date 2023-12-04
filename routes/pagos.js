const express = require ('express');
const router = express.Router();
const pagosController = require('../controllers/pagosController.js');

router.post('/', pagosController.crearPago); // Cargar dato
router.get('/pagos',pagosController.obtenerPagos);
router.get('/idUsuario/:id', pagosController.obtenerPagoPorUsuarioId); // Traer dato
router.put('/finish-payment/:idUsuario', pagosController.completarInformacionPago);
//router.put('/finish-payment/:idUsuario', pagosController.completarInformacionPago);
//router.put('/:id', pagosController.actualizarPago); // Modificar dato con ID
//router.get('/:id', pagosController.obtenerPagoID); // Traer dato con ID
//router.delete('/:id', pagosController.eliminarPago); // Eliminar dato con ID
module.exports = router;