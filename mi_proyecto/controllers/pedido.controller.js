const { Pedido } = require('../models');


// exports.obtenerPedidos = async (req, res) => {
// const pedidos = await Pedido.findAll();
// res.json(pedidos);
// };

// exports.crearPedido = async (req, res) => {
// const pedido = await Pedido.create(req.body);
// res.status(201).json(pedido);
// };


// Obtener todos los pedidos
exports.obtenerPedido = async (req, res) => {
    try {
      const pedidos = await Pedido.findAll();
      return res.status(200).json(pedidos);  // Retorna todos los pedidos con código 200
    } catch (error) {
      console.error(error);
      return res.status(500).json({ mensaje: "Error al obtener los pedidos" });
    }
  };
  
  // Crear un nuevo pedido
  exports.crearPedido = async (req, res) => {
    const { fecha, total, clienteId } = req.body;
  
    if (!fecha || !total || !clienteId) {
      return res.status(400).json({ mensaje: "Faltan datos: fecha, total y clienteId son obligatorios." });
    }
  
    try {
      const pedido = await Pedido.create({ fecha, total, clienteId });
      return res.status(201).json(pedido);  // Retorna el pedido creado con código 201
    } catch (error) {
      console.error(error);
      return res.status(500).json({ mensaje: "Error al crear el pedido" });
    }
  };
  
  // Obtener un pedido por ID
  exports.obtenerPedidoPorId = async (req, res) => {
    const { id } = req.params;
    try {
      const pedido = await Pedido.findByPk(id);
  
      if (!pedido) {
        return res.status(404).json({ mensaje: "Pedido no encontrado" });
      }
  
      return res.status(200).json(pedido);  // Retorna el pedido encontrado
    } catch (error) {
      console.error(error);
      return res.status(500).json({ mensaje: "Error al obtener el pedido" });
    }
  };
  
  // Actualizar un pedido
  exports.actualizarPedido = async (req, res) => {
    const { id } = req.params;
    const { fecha, total, clienteId } = req.body;
  
    try {
      const pedido = await Pedido.findByPk(id);
  
      if (!pedido) {
        return res.status(404).json({ mensaje: "Pedido no encontrado" });
      }
  
      // Actualización de los campos
      pedido.fecha = fecha || pedido.fecha;
      pedido.total = total || pedido.total;
      pedido.clienteId = clienteId || pedido.clienteId;
      await pedido.save();  // Guarda los cambios
  
      return res.status(200).json(pedido);  // Retorna el pedido actualizado
    } catch (error) {
      console.error(error);
      return res.status(500).json({ mensaje: "Error al actualizar el pedido" });
    }
  };
  
  // Eliminar un pedido
  exports.eliminarPedido = async (req, res) => {
    const { id } = req.params;
  
    try {
      const pedido = await Pedido.findByPk(id);
  
      if (!pedido) {
        return res.status(404).json({ mensaje: "Pedido no encontrado" });
      }
  
      await pedido.destroy();  // Elimina el pedido
      return res.status(200).json({ mensaje: "Pedido eliminado" });  // Retorna un mensaje de éxito
    } catch (error) {
      console.error(error);
      return res.status(500).json({ mensaje: "Error al eliminar el pedido" });
    }
  };