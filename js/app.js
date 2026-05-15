function ordenar() {
    Swal.fire({
        title: "Gracias por elegirnos",
        text: "Tu pedido será tomado en un momento",
        icon: "success"
    });
}
function enviar() {
    let varnombre = document.getElementById("nombre").value;
    let varcorreo = document.getElementById("correo").value;
    let vartxt = document.getElementById("txt").value;

    if (varnombre === "" || varcorreo === "" || vartxt === "") {
        Swal.fire({
            title: "Campos incompletos",
            text: "Por favor, llena todos los espacios",
            icon: "error"
        });
        return false;
    }

    Swal.fire({
        title: "Hemos recibido tu mensaje",
        text: "Te contactaremos pronto",
        icon: "success"
    });

    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("txt").value = "";

    return false;
}

