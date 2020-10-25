const express = require('express');
const router = express.Router();
const operationController = require('../controllers/operations.controller');

//RUTA PARA OBTENER TODAS LAS OPERACIONES
router.get('/operation', operationController.getAllOperations);

//RUTA PARA OBTENER TIPOS DE OPERACIONES
router.get('/operation/types', operationController.getAllOperationsType);

//RUTA PARA OBTENER UNA OPERACION
router.get('/operation/:id', operationController.getOneOperation);

//RUTA PARA CREAR UNA OPERACION
router.post('/operation', operationController.createOperation);

//RUTA PARA MODIFICAR UNA OPERACION
router.put('/operation/:id', operationController.updateOperation);

//RUTA PARA ELIMINAR UNA OPERACION
router.delete('/operation/:id', operationController.deleteOperation);

module.exports = router;