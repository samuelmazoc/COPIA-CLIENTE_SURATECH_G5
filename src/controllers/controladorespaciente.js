// OBJETIVO : Capturar los datos de un formulario

// 1. Por cada input, select , textare del formularion se crea una variable

// 2. por cada varible debo utilizar el DOM para 
// asociar el html con js 
let nombrePaciente=document.getElementById("nombrepaciente")
let correoPaciente=document.getElementById("correopaciente")
let fechanacimientoPaciente=document.getElementById("nacimientopaciente")
let telefonoPaciente=document.getElementById("telefonopaciente")
let tienePoliza=document.getElementById("polizapaciente")
let fechaAfiliacion=document.getElementById("afiliacionpaciente")
let ipsPaciente=document.getElementById("ipspaciente")
let grupoIngresoPaciente=document.getElementById("grupopaciente")
let ciudadPaciente=document.getElementById("ciudadpaciente")



//3.crear una variable para ascociar el boton de html

let botonRegistroPaciente = document.getElementById("botonregistropaciente")

//4. Detectamos acciones o eventons en el boton

botonRegistroPaciente.addEventListener("click",function(evento){
    evento.preventDefault()

    // 5. se crea un json 
    //que capture todos los datos del formulario
    let datosFDormularioPaciente={
        nombres:nombrePaciente.value,
        fechaNacimiento:fechanacimientoPaciente.value,
        ciudad:ciudadPaciente.value,
        correo:correoPaciente.value,
        telefono:telefonoPaciente.value,
        ips:ipsPaciente.value,
        grupoIngresos:grupoIngresoPaciente.value,
        tienePoliza:tienePoliza.value,
        fechaAfiliacion:fechanacimientoPaciente.value
    }

    // 6. Se envian los datos al backend
    console.log(datosFDormularioPaciente)


    Swal.fire({
        title: "Registro exitoso!",
        text: "Ya eres parte de nuestra gran familia!",
        icon: "success"
    });
})










