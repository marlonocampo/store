export default function validarCodigo({productos}, codigo) {
    let coincidencias = false
    productos.forEach((producto) => {
        if (producto.codigo === codigo) {
            coincidencias = true;
        }
    })
    return coincidencias;
}