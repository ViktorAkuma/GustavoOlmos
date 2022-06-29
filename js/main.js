function cargarAyudaNombre() {
    var h3=document.getElementById("ayuda");
    h3.innerHTML="Ingrese con mayúsculas su nombre";
}

function cargarAyudaApellido() {
    var h3=document.getElementById("ayuda");
    h3.innerHTML="Ingrese con mayúsculas su apellido";
}

function cargarAyudaEstadoCivil() {
    var h3=document.getElementById("ayuda");
    h3.innerHTML="Presione el cuadro para seleccionar/deseleccionar";
}

function cargarAyudaFecha() {
    var h3=document.getElementById("ayuda");
    h3.innerHTML="Ingrese su fecha de nacimiento en formato día, mes, año. Ejemplo: 01/02/2002";
}

function cargarAyudaFechaYHora() {
    var h3=document.getElementById("ayuda");
    h3.innerHTML="Ingrese el horario ticket en formato día, mes, año. Ejemplo: 01/02/2002. Y el horario en un formato de 24 horas";
}

function cargarAyudaHora() {
    var h3=document.getElementById("ayuda");
    h3.innerHTML="Ingrese el horario en un formato de 24 horas";
}

function verContraseña() 
{
    var label=document.getElementById("txtPassword");

    label.setAttribute("type","text");
}