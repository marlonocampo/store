export function resetFormulario(objControl) { 
  for (const value in objControl) {
    if (value === 'idL') continue;
    objControl[value] = ''
  }

  console.log('entro');
  return objControl;
} 