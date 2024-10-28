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
        nombres:nombreMedicamento.value,
        presentacion:presentacionedicamento.value,
        dosis:dosisMedicamento.value,
        laboratorio:laboratorioMedicamento.value,
        fechaDeCaducidad:fechaCaducidadMedicamento.value,
        contraIndicacion:contraIndicacionesMedicamento.value,
        registro:registroMedicamento.value,
        tienecopago:tieneCopagoMedicamento.value
        
    }

    // 6. Se envian los datos al backend
    console.log(datosFDormularioMedicamento)


    Swal.fire({
        title: "Registro exitoso!",
        text: "Ya eres parte de nuestra gran familia!",
        icon: "success"
      });
})