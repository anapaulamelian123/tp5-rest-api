const productoData = require('../data/productoData');

exports.obtenerTodos = () => productoData.obtenerTodos();

exports.agregar = (nombre) => {
  if (!nombre) {
    return { error: 'Falta el nombre del producto' };
  }
  const producto = productoData.agregar(nombre);
  return { mensaje: `Producto '${nombre}' agregado.`, producto };
};

exports.obtenerPorId = (id) => productoData.obtenerPorId(id);

exports.actualizar = (id, nombre) => productoData.actualizar(id, nombre);

exports.eliminar = (id) => productoData.eliminar(id);
