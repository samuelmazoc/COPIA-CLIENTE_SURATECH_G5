// document.getElementById("registro-form").addEventListener("submit", function(event) {
//     event.preventDefault();

//     // Obtener las contraseñas
//     var password = document.getElementById("password").value;
//     var confirmPassword = document.getElementById("confirm-password").value;

//     // Validar que las contraseñas coincidan
//     if (password !== confirmPassword) {
//         alert("Las contraseñas no coinciden. Por favor, inténtelo nuevamente.");
//     } else {
//         alert("Formulario enviado exitosamente.");
//         // Aquí puedes proceder con el envío del formulario
//     }
// });

// document.getElementById("login-form").addEventListener("submit", function(event) {
//     event.preventDefault();
    
//     const email = document.getElementById("login-email").value;
//     const password = document.getElementById("login-password").value;
    
//     const storedEmail = localStorage.getItem("userEmail");
//     const storedPassword = localStorage.getItem("userPassword");
    
//     if (email === storedEmail && password === storedPassword) {
//         Swal.fire("Bienvenido", "Has iniciado sesión correctamente", "success");
//     } else {
//         Swal.fire("Error", "Correo o contraseña incorrectos", "error");
//     }
// });

        // Lógica para el registro
        document.getElementById("registro-form").addEventListener("submit", function(event) {
            event.preventDefault();

            // Obtener los valores del formulario
            const correo = document.getElementById("correo").value;
            const password = document.getElementById("password").value;

            // Validar que las contraseñas coincidan
            if (password !== document.getElementById("confirm-password").value) {
                Swal.fire("Error", "Las contraseñas no coinciden", "error");
                return;
            }

            // Guardar en localStorage
            localStorage.setItem("userEmail", correo);
            localStorage.setItem("userPassword", password);

            // Ocultar el formulario de registro y mostrar el contenido de la página
            document.querySelector(".form-section").style.display = "none";
            document.querySelectorAll(".content-section").forEach(section => {
                section.style.display = "block";
            });

            // Mostrar mensaje de éxito
            Swal.fire("¡Registro exitoso!", "Bienvenido a SURATECH", "success");
        });