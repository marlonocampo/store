export function validarCodigo(objtoActual, listaTemporal, listaExistente) {
    const { codigo } = objtoActual;
    let valido = true;

    if (listaExistente.length > 0) {
        listaExistente.forEach((item) => {
            if (item.codigo === codigo) {
                valido = false;
            }
        });
    }

    if (listaTemporal.length > 0) {
        listaTemporal.forEach((item) => {
            if (codigo === item.codigo) {
                valido = false;
            }
        })
    }
    return valido;
}