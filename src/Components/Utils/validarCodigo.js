export default function validarCodigo({productos}, codigo) {
    let valido = false;
    if (productos.length > 0) {
        productos.forEach((cod) => {
            if (cod.codigo === codigo) {
                valido = true;
            }
        });
    }
    return valido;
}