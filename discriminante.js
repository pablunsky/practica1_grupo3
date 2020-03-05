function disc(a, b, c, err) {
    if(isNaN(a) || isNaN(b) || isNaN(c) || isNaN(err)) { 
        console.log('Las valores deben ser numeros positivos');
        return -1;
    }
    const linf = Math.pow(b,2) - (4*a*c) - inf;
    const lsup = Math.pow(b,2) - (4*a*c) + inf;
    return {inferior: linf, superior: lsup};
}

function numeroAbsoluto(numero)
{
    if(!isNaN(numero))
    {
        console.log('Numero Ingresado: '+numero)
        if(numero < 0)
        {
            numero = numero * -1;
        }
        else if(numero == 0)
        {
            console.log('Numero ingresado es 0 ');
        }
        console.log('Numero Absoluto: '+numero);
        return numero;
    }
    else
    {
        console.log('El Valor ingresado no es un numero');
        return 0;
    } 
}