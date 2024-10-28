
let nombreEnfermedad=document.getElementById("nombreenfermedad")
let sintomasEnfermedad=document.getElementById("sintomasenfermadad")
let clasificacionEnfermedad=document.getElementById("clasificacionenfermedad")
let gradoEnfermedad=document.getElementById("gradoenfermedad")
let probabilidadVidaEnfermedad=document.getElementById("probabilidadenfermedad")


let botonRegistroEnfermedad = document.getElementById("botonregistroenfermedad")

//4. Detectamos acciones o eventons en el boton

botonRegistroEnfermedad.addEventListener("click",function(evento){
    evento.preventDefault()

    // 5. se crea un json 
    //que capture todos los datos del formulario
    let datosFormularioEnfermedad={
        nombres:nombreEnfermedad.value,
        sintomas:sintomasEnfermedad.value,
        clasificacion:clasificacionEnfermedad.value,
        grado:gradoEnfermedad.value,
        probabilidadvida:probabilidadVidaEnfermedad.value
    }

    // 6. Se envian los datos al backend
    console.log(datosFormularioEnfermedad)


    Swal.fire({
        title: "Registro exitoso!",
        text: "Ya eres parte de nuestra gran familia!",
        icon: "success"
      });
})