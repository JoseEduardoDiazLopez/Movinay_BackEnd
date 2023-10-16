const express = require ('express');
const router = express.Router();
const citaController = require('../controllers/citaController.js');

router.get('/', citaController.obtenerCita); // Cargar dato
router.post('/', citaController.crearCita); // Traer dato
module.exports = router;