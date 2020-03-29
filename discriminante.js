function disc(a, b, c) {
    const dis = Math.pow(b,2) - (4*a*c);
    return dis;
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