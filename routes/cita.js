const express = require ('express');
const router = express.Router();
const citaController = require('../controllers/citaController.js');

router.get('/', citaController.obtenerCita); // Cargar dato
router.post('/', citaController.crearCita); // Traer dato
router.get('/:id', citaController.obtenerCitaID); // Cargar dato
router.get('/mis-citas/:id', citaController.obtenerCitaUsuario); // Cargar dato
module.exports = router;