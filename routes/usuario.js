const express = require('express');
const router = express.Router();
const authController = require('../controllers/usuarioController');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/perfil/:userId/', authController.getUserById)
//router.get('/user/:id', authController.obtenerId); // Cargar dato
module.exports = router;
