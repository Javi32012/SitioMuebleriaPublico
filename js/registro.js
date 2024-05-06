// Aquí puedes agregar tu script de JavaScript para manejar el registro de usuario
document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Aquí puedes obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const appat = document.getElementById("appat").value;
    const apmat = document.getElementById("apmat").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const contrasena = document.getElementById("contrasena").value;

    // Aquí puedes realizar la lógica para enviar los datos a un servidor o almacenarlos localmente
    console.log("Nombre:", nombre);
    console.log("Primer Apellido:", appat);
    console.log("Segindo Apellido:", apmat);
    console.log("Telefono:", telefono)
    console.log("Email:", email);
    console.log("Contraseña:", contrasena);

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