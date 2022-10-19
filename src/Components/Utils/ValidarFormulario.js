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
