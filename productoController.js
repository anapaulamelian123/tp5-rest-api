const productoService = require('../services/productoService');

exports.listarProductos = (req, res) => {
  const productos = productoService.obtenerTodos();
  res.json(productos);
};

exports.agregarProducto = (req, res) => {
  const { nombre } = req.body;
  const resultado = productoService.agregar(nombre);

  if (resultado.error) {
    res.status(400).json(resultado);
  } else {
    res.status(201).json(resultado);
  }
};

exports.obtenerProductoPorId = (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productoService.obtenerPorId(id);
  if (producto) {
    res.json(producto);
  } else {
    res.status(404).json({ mensaje: 'Producto no encontrado' });
  }
};

exports.actualizarProducto = (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre } = req.body;
  const actualizado = productoService.actualizar(id, nombre);
  if (actualizado) {
    res.json(actualizado);
  } else {
    res.status(404).json({ mensaje: 'Producto no encontrado' });
  }
};

exports.eliminarProducto = (req, res) => {
  const id = parseInt(req.params.id);
  const eliminado = productoService.eliminar(id);
  if (eliminado) {
    res.json({ mensaje: 'Producto eliminado' });
  } else {
    res.status(404).json({ mensaje: 'Producto no encontrado' });
  }
};
