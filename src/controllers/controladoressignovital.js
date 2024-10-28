let nombreSignoVital=document.getElementById("nombresignovital")
let valoresSignoVital=document.getElementById("valoressignovital")
let fechaMedidaSignoVital=document.getElementById("fechasignovital")

let botonRegistroSignoVital = document.getElementById("botonregistropaciente")

//4. Detectamos acciones o eventons en el boton

botonRegistroSignoVital.addEventListener("click",function(evento){
    evento.preventDefault()

    // 5. se crea un json 
    //que capture todos los datos del formulario
    let datosFDormularioSignovital={
        nombres:nombreSignoVital.value,
        valores:valoresSignoVital.value,
        fechaMedida:fechaMedidaSignoVital.value   
    }

    // 6. Se envian los datos al backend
    console.log(datosFDormularioSignovital)


    Swal.fire({
        title: "Registro exitoso!",
        text: "Ya eres parte de nuestra gran familia!",
        icon: "success"
      });
})