/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
 //declaro variable
	var nombre;
//asigno variable 
	nombre = prompt("ingrese su nombre");
//asigno variable el id
	document.getElementById("elNombre").value = nombre;

}

