import axios from "axios";

let URL = "http://localhost/Store/public/api/categoriaApi/";
const resp = {};
resp.List = async () => {
    return await axios
        .get(URL + "List")
        .then((resp) => {
            return resp.data.Categorias;
        })
        .catch((error) => {
            return error;
        });
};

export default resp;
