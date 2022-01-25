
export default function validarCodigo({productos}, codigo){
    let coincidencias = false
    productos.map((producto) => {
        if (producto.codigo === codigo) {
            coincidencias = true;
        }
    })
return coincidencias;
}