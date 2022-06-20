function formulario() {
    var formulario = document.getElementById("formulario").style.display = "block";
    var reserva = document.getElementById("reserva").style.display = "none";

}
function reserva() {

    var reserva = document.getElementById("reserva").style.display = "block";
    var formulario = document.getElementById("formulario").style.display = "none";

}
function envioformulario() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var motivo = document.getElementById("motivo").value;
    var texto = document.getElementById("texto").value;

    if (nombre == "") {
        alert("El campo 'Nombre' es obligatorio")
    } else if (correo == "") {
        alert("El campo 'Correo' es obligatorio")
    } else if (telefono == "") {
        alert("El campo 'Teléfono' es obligatorio")
    } else if (motivo == "") {
        alert("El campo 'Motivo' es obligatorio")
    } else if (texto == "" || texto == undefined || texto == null) {
        alert("El campo es requerido")
    } else {
        alert("Muchas gracias " + nombre + " hemos recibido su " + motivo + " y enviaremos una pronta respuesta al correo " + correo)
    }



}

$(document).ready(function () {

    var titulo, descripcion, img;

    $("#tarjeta1").click(function () {
        titulo = $("#titulo1").html();
        descripcion = $("#descripcion1").html();
        img = $("#img1").attr("src");
        $("#tittle").text(titulo);
        $("#description").text(descripcion);
        $("#image").attr("src", img)

        $("#destacado").show();


    })

    $("#tarjeta2").click(function () {
        titulo = $("#titulo2").html();
        descripcion = $("#descripcion2").html();
        img = $("#img2").attr("src");
        $("#tittle").text(titulo);
        $("#description").text(descripcion);
        $("#image").attr("src", img)

        $("#destacado").show();


    })

    $("#tarjeta3").click(function () {
        titulo = $("#titulo3").html();
        descripcion = $("#descripcion3").html();
        img = $("#img3").attr("src");
        $("#tittle").text(titulo);
        $("#description").text(descripcion);
        $("#image").attr("src", img)

        $("#destacado").show();


    })

    $(".btn-close").click(function () {
        $("#destacado").hide();
    })



    $("#enviaReserva").click(function () {
        var nombreR = $("#nombreR").val(); 
        var correoR = $("#correoR").val();
        var telefonoR = $("#telefonoR").val();
        var fecha = $("#fecha").val();
        var hora = $("#hora").val();
        var asistentes = $("#asistentes").val();
        alert("Estimado: " + nombreR + " agradecemos por reservar con nosotros. Hemos registrado " + asistentes + " asistentes." +
            " Se ha enviado el código de confirmación al correo " + correoR + "\nGracias por preferirnos");
        $("#nombreR").val(" ");
        $("#correoR").val(" ");
        $("#telefonoR").val(" ");
        $("#fecha").val(" ");
        $("#hora").val(" ");
        $("#asistentes").val(" ");


    })


    $("#nosotros").click(function(){
        $("#historia").show();
    })

   $("#cierre-historia").click(function(){
       $("#historia").hide();
   })




});