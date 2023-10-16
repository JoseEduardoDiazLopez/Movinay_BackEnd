const express = require ('express');
const router = express.Router();
const citaController = require('../controllers/citaController.js');

router.post('/', citaController);
module.exports = router;