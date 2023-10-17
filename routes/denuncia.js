const express = require ('express');
const router = express.Router();
const denunciaController = require('../controllers/denunciaController.js');

router.get('/', denunciaController.obtenerDenuncia); // Cargar dato
router.post('/', denunciaController.crearDenuncia); // Traer dato
router.get('/:id', denunciaController.obtenerDenuncia); // Cargar dato
module.exports = router;