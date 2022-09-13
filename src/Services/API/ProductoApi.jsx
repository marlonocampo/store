import axios, { Axios } from "axios";
let URL = "http://localhost/Store/public/api/productoApi/";
const productoApi = {};

productoApi.List = () => {
  return axios
    .get(URL + "List")
    .then((resp) => {
      return resp.data.productos;
    })
    .catch((error) => {
      return error;
    });
};

productoApi.Insert = async (datosInsert) => {
  console.log(datosInsert);
  return await axios
    .post(URL + "Insert", datosInsert)
    .then((resp) => {
      console.log("axios: " + resp.data.resp);
      return resp.data.resp;
    })
    .catch((error) => {
      return error;
    });
};

productoApi.Actualzar = async (datosActualizar) => {
  return Axios.post(URL + "Update", datosActualizar)
    .then((res) => res.json())
    .then();
};

export default productoApi;