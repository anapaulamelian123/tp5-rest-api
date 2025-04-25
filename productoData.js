let productos = [];
let idActual = 1;

exports.obtenerTodos = () => productos;

exports.agregar = (nombre) => {
  const nuevo = { id: idActual++, nombre };
  productos.push(nuevo);
  return nuevo;
};

exports.obtenerPorId = (id) => productos.find(p => p.id === id);

exports.actualizar = (id, nombre) => {
  const producto = productos.find(p => p.id === id);
  if (producto) {
    producto.nombre = nombre;
    return producto;
  }
  return null;
};

exports.eliminar = (id) => {
  const index = productos.findIndex(p => p.id === id);
  if (index !== -1) {
    productos.splice(index, 1);
    return true;
  }
  return false;
};
