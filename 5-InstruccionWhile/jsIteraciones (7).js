function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numeroIngresado;

	while(respuesta == si){
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
		respuesta = prompt("desea continuar: esbribir si para continuar");
	}
	


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN