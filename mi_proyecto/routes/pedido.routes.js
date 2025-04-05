const express = require('express');
const router = express.Router();
const {
    obtenerPedido,
    crearPedido,
    obtenerPedidoPorId,
    actualizarPedido,
    eliminarPedido
  } = require('../controllers/pedido.controller'); // Importa correctamente las funciones del controlador


// Rutas para los clientes
router.get('/pedidos', obtenerPedido);  // Obtener todos 
router.post('/pedidos', crearPedido);   // Crear un nuevo 
router.get('/pedidos/:id', obtenerPedidoPorId);  // Obtener 
router.put('/pedidos/:id', actualizarPedido);   // Actualizar 
router.delete('/pedidos/:id', eliminarPedido);  // Eliminar

module.exports = router;