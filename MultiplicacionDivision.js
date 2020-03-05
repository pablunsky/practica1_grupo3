function multiplicar(n1,n2){
  return (parseInt(n1) * parseInt(n2));
}

function dividir(n1,n2){
  if (n2!=0){
    return (parseInt(n1) / parseInt(n2));
  }
  console.log('dividendo no puede ser 0');
  return 0;
}
