/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numeroUno;
    var numeroDos;
    var numeroDosParseado;

    numeroUno = parseInt(document.getElementById("numeroUno").value);
    numeroDos = document.getElementById("numeroDos").value;
    numeroDosParseado = parseInt(numeroDos);
    
    resultado = numeroUno + numeroDosParseado;

    alert("la suma " + resultado);
}

function restar()
{
    
    var numeroUno;
    var numeroDos;
    var numeroDosParseado;

    numeroUno = parseInt(document.getElementById("numeroUno").value);
    numeroDos = document.getElementById("numeroDos").value;
    numeroDosParseado = parseInt(numeroDos);
    
    resultado = numeroUno - numeroDosParseado;

    alert("la resta " + resultado);

}

function multiplicar()
{ 
    var numeroUno;
    var numeroDos;
    var numeroDosParseado;

    numeroUno = parseInt(document.getElementById("numeroUno").value);
    numeroDos = document.getElementById("numeroDos").value;
    numeroDosParseado = parseInt(numeroDos);
    
    resultado = numeroUno * numeroDosParseado;

    alert("la multiplicacion  " + resultado);

}

function dividir()
{
    var numeroUno;
    var numeroDos;
    var numeroDosParseado;

    numeroUno = parseInt(document.getElementById("numeroUno").value);
    numeroDos = document.getElementById("numeroDos").value;
    numeroDosParseado = parseInt(numeroDos);
    
    resultado = numeroUno & numeroDosParseado;

    alert("la division " + resultado);

}

