import {useEffect, useState} from "react";
import axios from "axios";

export default function useGet(objeto) {
    let URL = `http://localhost/Store/public/api/${objeto}Api/List`;
    const [datos, setDatos] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        const fetchApi = async () => {
            try {
                const resp = await axios.get(URL);
                setDatos(resp.data.productos)
                setLoading(false);
            } catch (error) {
                setLoading(false)
                setError(error);
            }
        }
        fetchApi().then(error => (setError(error)));
    }, [URL])
    return [datos, loading, error];
}