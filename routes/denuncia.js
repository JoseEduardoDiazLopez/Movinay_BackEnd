const express = require ('express');
const router = express.Router();
const denunciaController = require('../controllers/denunciaController.js');

router.get('/', denunciaController.obtenerCita); // Cargar dato
router.post('/', denunciaController.crearCita); // Traer dato
router.get('/:id', denunciaController.obtenerCita); // Cargar dato
module.exports = router;