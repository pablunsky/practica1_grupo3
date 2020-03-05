function multiplicar(n1,n2){
    if(isNan(n1) || isNaN(n2)){
        console.log('No se han ingresado numeros.');
        return 0;
    }
    if(Number.isInteger(n1)&&Number.isInteger(n1)){
      return (parseInt(n1) * parseInt(n2));
    }else{
        console.log('Uno de los datos no es un Numero');
        return 0;
    }
  
}

function dividir(n1,n2){
  if(Number.isInteger(n1)&&Number.isInteger(n1)){
    if (n2!=0){
      return (parseInt(n1) / parseInt(n2));
    }
    console.log('dividendo no puede ser 0');
    return 0;
  }else{
    console.log('Uno de los datos no es un Numero');
    return 0;
  }
}
