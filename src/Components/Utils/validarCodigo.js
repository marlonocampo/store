export default function validarCodigo({ productos }, codigo, listaProductos) {
    let valido = false;
    if (productos.length > 0) {
        productos.forEach((cod) => {
            if (cod.codigo === codigo) {
                valido = true;
            }
        });
    }
    if (listaProductos.length > 0) {
        listaProductos.forEach((cod) => {
            if (codigo === cod.codigo) {
                valido = true;
            }
        })
    }
    return valido;
}