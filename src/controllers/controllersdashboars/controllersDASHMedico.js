import{buscarMedico}from "../../services/serviciosMedico.js"

//Objetivo: Recibir datos del BACK y hacerles render (render=pintarlos)
// PASO 1 -> Quemar o similar los datos 

buscarMedico()
.then(function (respuestaBack) {
    console.log(respuestaBack)

        //2.crear una referencia a una etiqueta html donde vamos a reanderizar
    let fila = document.getElementById("fila")

    // 3. Se recorren los datos para obtenerlo de forma separada 
    respuestaBack.forEach( function(medico){
        console.log(medico)
        // 4. se crean columnas
        let columna=document.createElement("div")
        columna.classList.add("col")

        // 5. Se crean tarjetas 
        let tarjetas = document.createElement("div")
        tarjetas.classList.add("card","p-5","h-100","shadow")

        // 6. Se crea una etiqueta para poner el nombre del paciente 
        let nombre = document.createElement("h2")
        nombre.textContent=medico.nombre

        let correo = document.createElement("p");
        correo.classList.add("card-text");
        correo.textContent = medico.correo;

        let especialidad = document.createElement("p2");
        especialidad.classList.add("card-text");
        especialidad.textContent = medico.especialidad;


        //paso final (ORDENANDO LAS CARTAS)
        tarjetas.appendChild(nombre)
        tarjetas.appendChild(correo)
        tarjetas.appendChild(especialidad)
        columna.appendChild(tarjetas)
        fila.appendChild(columna) 
    })
})


