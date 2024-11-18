
//Objetivo: Recibir datos del BACK y hacerles render (render=pintarlos)
// PASO 1 -> Quemar o similar los datos 

let signoVital = [
    {
        id:555, 
        nombres:"presion",
        valores:"ddd",
        fechademedida:"1998-03-15",
    },  {
        id:45, 
        nombres:"presion",
        valores:"ddd",
        fechademedida:"1998-03-15",
    },  {
        id:5, 
        nombres:"presion",
        valores:"ddd",
        fechademedida:"1998-03-15",
    },  {
        id:255, 
        nombres:"presion",
        valores:"ddd",
        fechademedida:"1998-03-15",
    },  {
        id:455, 
        nombres:"presion",
        valores:"ddd",
        fechademedida:"1998-03-15",
    },  {
        id:55, 
        nombres:"presion",
        valores:"ddd",
        fechademedida:"1998-03-15",
    },
]
//2.crear una referencia a una etiqueta html donde vamos a reanderizar
let fila = document.getElementById("fila")

// 3. Se recorren los datos para obtenerlo de forma separada 
signoVital.forEach( function(signoVital){
    console.log(signoVital)
    // 4. se crean columnas
    let columna=document.createElement("div")
    columna.classList.add("col")

    // 5. Se crean tarjetas 
    let tarjetas = document.createElement("div")
    tarjetas.classList.add("card","p-5","h-100","shadow")

    // 6. Se crea una etiqueta para poner el nombre del paciente 
    let nombre = document.createElement("h2")
    nombre.textContent=signoVital.nombres

    //paso final (ORDENANDO LAS CARTAS)
    tarjetas.appendChild(nombre)
    columna.appendChild(tarjetas)
    fila.appendChild(columna) 
})
