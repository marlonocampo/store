import axios from "axios";
let URL = "http://localhost/apistore/public/api/Producto";


const listaProductosApi = () => {
  return axios.get(`${URL}/Listar`).then(resp => resp.data.productos);
}

const insertarProductoApi = (datos) => {
  return axios
    .post(`${URL}/Crear`, datos)
    .then((resp) => resp.data)
}

export { listaProductosApi, insertarProductoApi }