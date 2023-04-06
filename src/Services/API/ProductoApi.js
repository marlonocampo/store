import axios from "axios";
let URL = "http://localhost/apistore/public/api/Producto";
//data es palabra reservada que viene en la respuesta del api de LARAVEL 

const listaProductosApi = () => {
  return axios.get(`${URL}/Listar`).then(resp => resp.data.productos);
}

const insertarProductoApi = (datos) => {
  return axios
    .post(`${URL}/Crear`, datos)
    .then((resp) => resp.data)
}

const actualizarProducto = (datos) => {
  return axios
    .put(`${URL}/Actualizar`, datos)
    .then(res => res.data)
}

const eliminarProducto = (id) => {
  return axios.delete(`${URL}/Eliminar`, id).then(res => res.data)
}

export { listaProductosApi, insertarProductoApi, actualizarProducto, eliminarProducto }