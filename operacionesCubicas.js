function potenciaCubo(valor) {
  return Math.pow(valor, 3);
}

function raizCubica(valor) {
  if(valor < 0) return { mensaje: 'No se aceptan numeros negativos.', valor: NaN};
  const raiz3 = Math.pow(valor, 1/3)
  return { mensaje: `La raiz ${valor % raiz3 == 0 ? '': 'no '}es exacta.`, valor: raiz3};;
}
