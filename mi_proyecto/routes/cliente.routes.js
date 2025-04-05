const express = require('express');
const router = express.Router();
const { obtenerClientes, crearCliente, obtenerClientePorId, actualizarCliente, eliminarCliente } = require('../controllers/cliente.controller');

// Rutas para los clientes
router.get('/clientes', obtenerClientes);  // Obtener todos los clientes
router.post('/clientes', crearCliente);   // Crear un nuevo cliente
router.get('/clientes/:id', obtenerClientePorId);  // Obtener un cliente por ID
router.put('/clientes/:id', actualizarCliente);   // Actualizar un cliente por ID
router.delete('/clientes/:id', eliminarCliente);  // Eliminar un cliente por ID

module.exports = router;