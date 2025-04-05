const { Cliente } = require('../models');


// exports.obtenerClientes = async (req, res) => {
// const clientes = await Cliente.findAll();
// res.json(clientes);
// };

// exports.crearCliente = async (req, res) => {
// const cliente = await Cliente.create(req.body);
// res.status(201).json(cliente);
// };




// Obtener todos los clientes
exports.obtenerClientes = async (req, res) => {
    try {
      const clientes = await Cliente.findAll();
      return res.status(200).json(clientes);  // Retorna los clientes con código 200
    } catch (error) {
      console.error(error);
      return res.status(500).json({ mensaje: "Error al obtener los clientes" });
    }
  };
  
  // Crear un nuevo cliente
  exports.crearCliente = async (req, res) => {
    try {
      const { nombre, correo } = req.body;
  
      // Validación básica de entrada
      if (!nombre || !correo) {
        return res.status(400).json({ mensaje: "Faltan datos: nombre y correo son obligatorios." });
      }
  
      const cliente = await Cliente.create({ nombre, correo });
      return res.status(201).json(cliente);  // Retorna el cliente creado con código 201
    } catch (error) {
      console.error(error);
      return res.status(500).json({ mensaje: "Error al crear el cliente" });
    }
  };
  
  // Obtener un cliente por ID
  exports.obtenerClientePorId = async (req, res) => {
    const { id } = req.params;
    try {
      const cliente = await Cliente.findByPk(id);
  
      if (!cliente) {
        return res.status(404).json({ mensaje: "Cliente no encontrado" });
      }
  
      return res.status(200).json(cliente);  // Retorna el cliente encontrado
    } catch (error) {
      console.error(error);
      return res.status(500).json({ mensaje: "Error al obtener el cliente" });
    }
  };
  
  // Actualizar un cliente
  exports.actualizarCliente = async (req, res) => {
    const { id } = req.params;
    const { nombre, correo } = req.body;
  
    try {
      const cliente = await Cliente.findByPk(id);
  
      if (!cliente) {
        return res.status(404).json({ mensaje: "Cliente no encontrado" });
      }
  
      // Actualización de los campos
      cliente.nombre = nombre || cliente.nombre;
      cliente.correo = correo || cliente.correo;
      await cliente.save();  // Guarda los cambios
  
      return res.status(200).json(cliente);  // Retorna el cliente actualizado
    } catch (error) {
      console.error(error);
      return res.status(500).json({ mensaje: "Error al actualizar el cliente" });
    }
  };
  
  // Eliminar un cliente
  exports.eliminarCliente = async (req, res) => {
    const { id } = req.params;
  
    try {
      const cliente = await Cliente.findByPk(id);
  
      if (!cliente) {
        return res.status(404).json({ mensaje: "Cliente no encontrado" });
      }
  
      await cliente.destroy();  // Elimina el cliente
      return res.status(200).json({ mensaje: "Cliente eliminado" });  // Retorna un mensaje de éxito
    } catch (error) {
      console.error(error);
      return res.status(500).json({ mensaje: "Error al eliminar el cliente" });
    }
  };