
function validacioncampos() {
    var Nombres = document.getElementById('name').value;
    var tipodemensaje= document.getElementById('type').value;
    var email= document.getElementById('E-mail').value;
    var celular= document.getElementById('celular').value;
    var comentario= document.getElementById('comment').value
    var mensaje = "";

    /*if (tipodemensaje =="") {
        alert("El tipo de mensaje esta vacio").
        document.getElementById("type").focus();
    }
    
    if (Nombres=="") {
        alert("El campo esta vacio");
        document.getElementById("name").focus();
    }*/

    
    if (tipodemensaje == "" || Nombres == "") {
        if (tipodemensaje == "") { 
            mensaje += "El campo tipo mensaje esta vacio";
        }
        if (Nombres == "") { 
            mensaje += "\nEl campo nombre esta vacio";
        }
        if (email == ""){
            mensaje += "\nDebe introducir el correo electrónico"
        }
        if (celular == ""){
            mensaje += "\nDebe llenar el campo celular"
        }
        if (comentario == ""){
            mensaje += "\nDebe llenar este campo"
        }
        alert(mensaje);} }
