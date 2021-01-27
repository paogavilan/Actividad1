
function validacioncampos() {
    var Nombres = document.getElementById('name').value;
    var tipodemensaje= document.getElementById('type').value;

    
    
    if (Nombres=="") {
        alert("El campo esta vacio");
        document.getElementById("name").focus();
    }

    /*var mensaje = "";
    if (tipodemensaje == "" || Nombres == "") {
        if (tipodemensaje == "") { 
            mensaje += "El campo tipo mensaje esta vacio";
        }
        if (Nombres == "") { 
            mensaje += "\El campo nombre esta vacio";
        }
        alert(mensaje);*/
    
}