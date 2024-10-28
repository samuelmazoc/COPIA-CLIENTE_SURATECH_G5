let nombreMedico=document.getElementById("nombremedico")
let matriculaProfesionalMedico=document.getElementById("matriculamedico")
let especialidadMedico=document.getElementById("especialidadmedico")
let salarioMedico=document.getElementById("salariomedico")
let ipsMedico=document.getElementById("ipsmedico")
let correoMedico=document.getElementById("correomedico")
let telefonoMedico=document.getElementById("telefonomedico")
let direccionMedico=document.getElementById("Direccionmedico")
let disponibleFinDeSemanaMedico=document.getElementById("disponiblemedico")

let botonRegistroPaciente = document.getElementById("botonregistropaciente")

//4. Detectamos acciones o eventons en el boton

botonRegistroPaciente.addEventListener("click",function(evento){
    evento.preventDefault()

    // 5. se crea un json 
    //que capture todos los datos del formulario
    let datosFDormularioMedico={
        nombres:nombreMedico.value,
        matricula:matriculaProfesionalMedico.value,
        especialidad:especialidadMedico.value,
        salario:salarioMedico.value,
        ips:ipsMedico.value,
        correo:correoMedico.value,
        telefono:telefonoMedico.value,
        dirrecion:direccionMedico.value,
        disponibleFinDeSemana:disponibleFinDeSemanaMedico.value
    }

    // 6. Se envian los datos al backend
    console.log(datosFDormularioMedico)


    Swal.fire({
        title: "Registro exitoso!",
        text: "Ya eres parte de nuestra gran familia!",
        icon: "success"
      });
})