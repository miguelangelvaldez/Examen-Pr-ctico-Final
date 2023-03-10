function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "admin" && password === "admin") {
        alert("Bienvenido!");
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}

function register() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (password === confirmPassword) {
        alert("Registro exitoso!");
    } else {
        alert("Las contraseñas no coinciden.");
    }
}


localStorage.setItem('publicaciones', 'file:///C:/Users/User/Desktop/Nueva%20carpeta%20(2)/publicaciones/publicaciones.html');

var angle = 0;
function galleryspin(sign) {
    spinner = document.querySelector("#spinner");
    if (!sign) {
        angle = angle + 45;
    } else {
        angle = angle - 45;
    }
    spinner.setAttribute(
        "style",
        "-webkit-transform: rotateY(" +
        angle +
        "deg); -moz-transform: rotateY(" +
        angle +
        "deg); transform: rotateY(" +
        angle +
        "deg);"
    );
}
