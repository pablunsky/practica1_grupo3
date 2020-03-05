function potenciaCubo(valor) {
  return Math.pow(valor, 3);
}

function raizCubica(valor) {
  if(valor < 0) return 'No se aceptan numeros negativos.';
  return Math.pow(valor, 1/3);
}