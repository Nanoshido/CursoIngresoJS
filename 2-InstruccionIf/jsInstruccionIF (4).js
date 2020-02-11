function mostrar()
{
//tomo la edad  
var edad;

edad = parseInt(document.getElementById("edad").value);
// ACA PREGUNTO SI NO ESTA AFUERA DEL RANGO 
if (!(edad < 13 || edad > 17)) {
    
    alert("es adolecente");
}

// ACA PREGUNTO SI ESTA DENTRO DEL RANGO 
/*if (edad >= 13) {                 //if (edad >= 13 && edad <=17){

if (edad <= 17) {                        //  alert("es adolecente") 
    alert ("es adolecente");              //  }
    
}
}                                                        //la edad esta dentro del rango?*/
//solo me acepta del 13 al 17
}//FIN DE LA FUNCIÓN