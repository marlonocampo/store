import axios from "axios";

let URL = "http://localhost/apistore/public/api/Categoria";

export const listaCategorias = async () => {
  return await axios.get(`${URL}/Listar`).then(resp => resp.data.categorias);
};
