import{registrarMedico}from "../services/serviciosMedico.js"



let nombreMedico=document.getElementById("nombremedico")
let matriculaProfesionalMedico=document.getElementById("matriculamedico")
let especialidadMedico=document.getElementById("especialidadmedico")
let salarioMedico=document.getElementById("salariomedico")
let ipsMedico=document.getElementById("ipsmedico")
let correoMedico=document.getElementById("correomedico")
let telefonoMedico=document.getElementById("telefonomedico")
let direccionMedico=document.getElementById("Direccionmedico")
let disponibleFinDeSemanaMedico=document.getElementById("disponiblemedico")

let botonRegistroMedico = document.getElementById("botonregistromedico")

//4. Detectamos acciones o eventons en el boton

botonRegistroMedico.addEventListener("click",function(evento){
    evento.preventDefault()

    // 5. se crea un json 
    //que capture todos los datos del formulario
    let datosFormularioMedico={
        nombre:nombreMedico.value,
        matriculaProfesional:matriculaProfesionalMedico.value,
        especialidad:especialidadMedico.value,
        salario:salarioMedico.value,
        ips:ipsMedico.value,
        correo:correoMedico.value,
        telefono:telefonoMedico.value,
        direccion:direccionMedico.value,
        disponibleFinDeSemana:true
    }

    // 6. Se envian los datos al backend
    console.log(datosFormularioMedico)
    registrarMedico(datosFormularioMedico)
    .then(function (respuestaBack) {
        console.log(respuestaBack)
        Swal.fire({
            title: "Registro exitoso!",
            text: "Ya eres parte de nuestra gran familia!",
            icon: "success"
        });
    })
})