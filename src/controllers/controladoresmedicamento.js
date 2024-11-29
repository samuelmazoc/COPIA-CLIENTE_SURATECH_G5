import{registrarMedicamento}from "../services/serviciosMedicamento.js"

let nombreMedicamento=document.getElementById("nombremedicamento")
let presentacionedicamento=document.getElementById("presentacionmedicamento")
let dosisMedicamento=document.getElementById("dosismedicamento")
let laboratorioMedicamento=document.getElementById("laboratoriomedicamento")
let fechaCaducidadMedicamento=document.getElementById("fechamecaducidaddicamento")
let contraIndicacionesMedicamento=document.getElementById("contraindicacionesmedicamento")
let registroMedicamento=document.getElementById("registromedicamento")
let tieneCopagoMedicamento=document.getElementById("tienecopago")

let botonRegistroMedicamento = document.getElementById("botonregistropaciente")

//4. Detectamos acciones o eventons en el boton

botonRegistroMedicamento.addEventListener("click",function(evento){
    evento.preventDefault()

    // 5. se crea un json 
    //que capture todos los datos del formulario
    let datosFDormularioMedicamento={
        nombre:nombreMedicamento.value,
        presentacion:presentacionedicamento.value,
        dosis:dosisMedicamento.value,
        laboratorio:laboratorioMedicamento.value,
        fechaDeCaducidad:fechaCaducidadMedicamento.value,
        contraIndecaciones:contraIndicacionesMedicamento.value,
        registro:registroMedicamento.value,
        tienecopago:true
        
    }

    // 6. Se envian los datos al backend
    console.log(datosFDormularioMedicamento)
    registrarMedicamento(datosFDormularioMedicamento)
    .then(function (respuestaBack) {
        console.log(respuestaBack)
            Swal.fire({
            title: "Registro exitoso!",
            text: "Ya eres parte de nuestra gran familia!",
            icon: "success"
        });
    })
})