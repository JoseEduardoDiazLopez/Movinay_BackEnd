const express = require ('express');
const router = express.Router();
const denunciaController = require('../controllers/denunciaController.js');

router.post('/', denunciaController.crearDenuncia); // Cargar dato
router.get('/', denunciaController.obtenerDenuncia); // Traer dato
router.put('/:id', denunciaController.actualizarDenuncia); // Modificar dato con ID
router.get('/:id', denunciaController.obtenerDenunciaID); // Traer dato con ID
router.delete('/:id', denunciaController.eliminarDenuncia); // Eliminar dato con ID
module.exports = router;