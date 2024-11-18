
let enfermedad = [

    {
        "id": 748,
        "nombres": "sida",
        "sintomas": "dolor de cabeza",
        "clasificacion": "1",
        "grado": "2",
        "probabilidadvida": "2",
    }, {
        "id": 48,
        "nombres": "asma",
        "sintomas": "ahogo  ",
        "clasificacion": "1",
        "grado": "1",
        "probabilidadvida": "2",
    }, {
        "id": 748,
        "nombres": "sida",
        "sintomas": "dolor de cabeza",
        "clasificacion": "1",
        "grado": "1",
        "probabilidadvida": "2",
    }, {
        "id": 748,
        "nombres": "sida",
        "sintomas": "dolor de cabeza",
        "clasificacion": "1",
        "grado": "1",
        "probabilidadvida": "2",
    },

    
]
//2.crear una referencia a una etiqueta html donde vamos a reanderizar
let fila = document.getElementById("fila")

// 3. Se recorren los datos para obtenerlo de forma separada 
enfermedad.forEach( function(enfermedad){
    console.log(enfermedad)
    // 4. se crean columnas
    let columna=document.createElement("div")
    columna.classList.add("col")

    // 5. Se crean tarjetas 
    let tarjetas = document.createElement("div")
    tarjetas.classList.add("card","p-5","h-100","shadow")

    // 6. Se crea una etiqueta para poner el nombre del paciente 
    let nombre = document.createElement("h2")
    nombre.textContent=enfermedad.nombres

    //paso final (ORDENANDO LAS CARTAS)
    tarjetas.appendChild(nombre)
    columna.appendChild(tarjetas)
    fila.appendChild(columna) 
})
