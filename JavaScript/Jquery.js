$(document).ready(function () {
    $("#form").submit(function (e) {
        e.preventDefault();
        var nombre = $("#name").val();
        var correo = $("#email").val();
        var clave = $("#password").val();

        var msjMostrar = "";
        let enviar = false;

        if (nombre.trim().length < 3 || nombre.trim().length > 14) {
            msjMotrar += "El nombre debe tener entre 3 y 14 caracteres";
            enviar = true;
        }

        var letra = nombre.trim().charAt(0);
        if (!esMayuscula(letra)) {
            msjMostrar += "<br>La primera letra debe ser mayúscula";
            enviar = true;
        }

        if (enviar) {
            $("#warnings").html(msjMostrar);
        }
        else {
            $("#warnings").html("Enviado");
        }



    });



    function esMayuscula(letra) {
        if (letra == letra.toUpperCase()) {
            return true;
        }
        else {
            return false;
        }
    }
});