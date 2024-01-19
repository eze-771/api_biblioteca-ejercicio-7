// En un nuevo archivo, por ejemplo, /routes/bibliotecaRouter.js
const express = require('express');
const router = express.Router();

// Importa los routers específicos
const librosRouter = require('./librosRouter');
const usuariosRouter = require('./usuariosRouter');

// Monta los routers específicos en rutas específicas
router.use('/libros', librosRouter);
router.use('/usuarios', usuariosRouter);

module.exports = router;
