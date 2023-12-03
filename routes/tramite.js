const express = require ('express');
const router = express.Router();
const tramiteController = require('../controllers/tramiteController.js');

router.get('/', tramiteController.obtenerTramites); // Cargar dato
router.post('/', tramiteController.crearTramite); // Cargar dato
router.get('/costo/:TipoTramite', tramiteController.obtenerTramitePorTipo); // Cargar dato
module.exports = router;