function esPrimo(numero){
    if(numero<2 ||isNaN()){
        console.log("Ingrese un valor valido");
        return false;
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