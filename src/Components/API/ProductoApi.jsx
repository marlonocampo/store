import axios from "axios";
let URL = "http://localhost/Store/public/api/productoApi/";
const productoApi = {}

productoApi.List = async () => {
    return await axios.get(URL + "List")
        .then(resp => {
            console.log(resp.data.productos)
            return resp.data.productos
        })
        .catch(error => {
            return error;
        })
}

productoApi.Insert = async (datosInsert) => {
    console.log(datosInsert);
    return await axios.post(URL + "Insert", datosInsert)
        .then(resp => {
            console.log('axios'+resp.data.resp)
            return resp.data.response
        })
        .catch(error => {
            return error;
        })
}
export default productoApi;