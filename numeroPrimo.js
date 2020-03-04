function esPrimo(numero){
    if(numero===0||numero===1||numero===-1)  {
        console.log("Los numeros 0 y 1 no son considerados numeros primos ni compuestos.");
        return false;
    }
    if(isNaN(numero)){
        console.log("Ingrese un valor valido");
        return false;
    }
    if(numero<0){
        numero=numero*-1;
    }
    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
            console.log(numero+" no es un numero primo")
            return false;
        }
      }
      console.log(numero+" es un numero primo");
      return true;
}