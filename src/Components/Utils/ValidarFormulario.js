import { validarCodigo } from "./validarCodigo";
export const validarFormulario = ([objetoInputs], listaTemporal, listaExistente) => {
  let valido = true;
  let camposNoValidos = {};
  for (const name in objetoInputs) {
    if (String(objetoInputs[name]).length === 0
      || String(objetoInputs[name]) === '0'
      || String(objetoInputs[name]) === 'null'
      || String(objetoInputs[name]) === 'Invalid Date'
    ) {
      camposNoValidos[name] = true
      valido = false;
    }
  }

  const { codigo } = objetoInputs;
  if (codigo && !validarCodigo(objetoInputs, listaTemporal, listaExistente)) {
    valido = false;
    camposNoValidos.codigo = 'existe';
  }

  return [valido, camposNoValidos];
}

export const errorInputs = (value) => {
  return (String(value).length === 0 || String(value) === '0' || String(value) == 'null' || String(value) === 'Invalid Date')
}

export const validiarObjeto = (datos, listaExistente) => {
  let valido = true;
  let camposNoValidos = {};
  const { codigo } = datos;

  for (const name in datos) {
    if (String(datos[name]).length === 0
      || String(datos[name]) === '0'
      || String(datos[name]) === ''
      || String(datos[name]) === 'null'
      || String(datos[name]) === 'Invalid Date'
      || datos.toString() === ''
    ) {
      camposNoValidos[name] = true
      valido = false;
    } else {
      camposNoValidos[name] = false
    }
  }
  listaExistente?.filter(le => le.codigo !== datos.codigoActual).map(element => {
    if (element.codigo === codigo) {
      valido = false
      camposNoValidos['codigo'] = 'existe'
    }
  })
  return [valido, camposNoValidos]
}