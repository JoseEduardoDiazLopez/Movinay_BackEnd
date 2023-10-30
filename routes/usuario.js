const express = require('express');
const router = express.Router();
const authController = require('../controllers/usuarioController');

router.post('/register', authController.register);
router.post('/login', authController.login);
//router.get('/user/:id', authController.obtenerId); // Cargar dato
module.exports = router;
