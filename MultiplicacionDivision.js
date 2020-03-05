function multiplicar(n1,n2){
  return (parseInt(n1) * parseInt(n2));
}

function dividir(n1,n2){
  if(!Number.isInteger(n1)){
    console.log('el primer dato no es un numero');
    return 0;
  }
  if(!Number.isInteger(n2)){
    console.log('el segundo dato no es un numero');
    return 0;
  }
  if (n2!=0){
    return (parseInt(n1) / parseInt(n2));
  }
  console.log('dividendo no puede ser 0');
  return 0;
}
