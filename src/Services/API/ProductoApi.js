import axios from "axios";
let URL = "http://localhost/apistore/public/api/Producto";


const listaProductosApi = async () => {
  return axios.get(`${URL}/Listar`).then(resp => resp.data.productos);
};


const insertarProductoApi = async (datos) => {
  return axios
    .post(`${URL}/Crear`, datos)
    .then((resp) => {
      console.log("axios: " + resp.data.Exito);
      return resp.data.Exito;
    })
};

export { listaProductosApi, insertarProductoApi };