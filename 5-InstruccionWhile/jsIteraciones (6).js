function mostrar()
{
// declaramos la variable
	var contador=0;
	var acumulador=0;
	var numeroIngresado;
	var promedio;
do {
//ingresar el numero

	numeroIngresado = prompt("ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);
    while (isNaN(numeroIngresado)) {
		numeroIngresado = prompt("lo que ingresaste no era un numero,volver a ingresalo");
		numeroIngresado = parseInt(numeroIngresado);
	}
 //en esta parte del codijo sabemos que el numero es correcto
	contador ++; // contador = conatador + 1;
    acumulador = acumulador + numeroIngresado;

	console.log("el contador es:"+contador);
	console.log("se encuentra acumulador : "+acumulador);
}while (contador < 5);
	

// muestra el acumulador
document.getElementById('suma').value=acumulador;
promedio = acumulador / contador;
// mostramos el promedio
document.getElementById('promedio').value=promedio/5;

}//FIN DE LA FUNCIÓN