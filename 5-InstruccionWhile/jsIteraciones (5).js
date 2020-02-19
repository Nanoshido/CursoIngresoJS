function mostrar()
{


        //validar el dato no vamos a parar a pedir el dato, hasta que este bien
 var sexo;
do{
    //se ejecuta  una vez si o si
var sexo = prompt("ingrese f ó m .");
sexo = sexo.toLocaleLowerCase();
}while (!(sexo == "f" || sexo == "m")) {// evalua la condicion

}
//aca el dato es correcto
switch (sexo) {
    case "f":
        sexo = "Femenino";
        break;
    case "m":
        sexo = "Masculino";
    break;
    
}



document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN