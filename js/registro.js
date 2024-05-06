// Aquí puedes agregar tu script de JavaScript para manejar el registro de usuario
document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Aquí puedes obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const appat = document.getElementById("appat").value;
    const apmat = document.getElementById("apmat").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;

    // Aquí puedes realizar la lógica para enviar los datos a un servidor o almacenarlos localmente
    console.log("Nombre:", nombre);
    console.log("Primer Apellido:", appat);
    console.log("Segindo Apellido:", apmat);
    console.log("Telefono:", telefono)
    console.log("Email:", correo);
    console.log("Contraseña:", contrasena);

    var ajax = new XMLHttpRequest();
    ajax.addEventListener("load", completo_handler, false);
    ajax.addEventListener("error", error_handler, false);
    ajax.addEventListener("abort", abort_handler, false);
    ajax.open("POST", "http://localhost/sitioMuebleria/registro.php");

    var paqueteUsuario = new FormData();
    paqueteUsuario.append("nombre", nombre);
    paqueteUsuario.append("appat", appat);
    paqueteUsuario.append("apmat", apmat);
    paqueteUsuario.append("telefono",telefono);
    paqueteUsuario.append("correo", correo);
    paqueteUsuario.append("contrasena", contrasena);
    ajax.send(paqueteUsuario);

    // Aquí podrías enviar los datos a un servidor utilizando fetch o XMLHttpRequest
    // fetch('url_del_servidor', {
    //     method: 'POST',
    //     body: JSON.stringify({ nombre, email, contrasena }),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }).then(response => {
    //     // Manejar la respuesta del servidor
    // }).catch(error => {
    //     console.error('Error al enviar los datos:', error);
    // });
});
function completo_handler(e) {
    document.getElementById("status").innerHTML = e.target.response;
}
function error_handler(e) {
    document.getElementById("status").innerHTML = e.target.response;

}
function abort_handler(e) {
    document.getElementById("status").innerHTML = e.target.response;

}