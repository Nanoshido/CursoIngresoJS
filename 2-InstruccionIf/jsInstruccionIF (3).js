function mostrar()
{
//tomo la edad  
var edad;

edad = parseInt(document.getElementById("edad").value);

 if (edad >= 18) {
     
    alert ("usted es mayor edad");
 }
 else  {                                //al revez tambien funciona 
     
    alert ("usted es menor de edad");
 }
}//FIN DE LA FUNCIÓN