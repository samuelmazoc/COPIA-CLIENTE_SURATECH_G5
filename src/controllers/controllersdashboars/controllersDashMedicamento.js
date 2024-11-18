
let medicamento = [
    {
        id:745, 
        nombres:"acentaminofen",
        presentacion:"oral",
        dosis:"medellin",
        laboratorio:"sura",
        fechacaducidad:"2029-03-15",
        contraindicaciones:"sede floreta",
        registro:"c",
        tienecopago:"true",
        fechaAfiliacion:"2024-06-5"
    }, {
        id:45, 
        nombres:"comfenalco",
        presentacion:"oral",
        dosis:"medellin",
        laboratorio:"sura",
        fechacaducidad:"2028-03-15",
        contraindicaciones:"sede floreta",
        registro:"c",
        tienecopago:"true",
        fechaAfiliacion:"2024-06-5"
    }, {
        id:75, 
        nombres:"Ibuprofeno",
        presentacion:"inyectable",
        dosis:"medellin",
        laboratorio:"sura",
        fechacaducidad:"2025-03-15",
        contraindicaciones:"sede floreta",
        registro:"c",
        tienecopago:"true",
        fechaAfiliacion:"2024-06-5"
    }, {
        id:85, 
        nombres:"Amoxicilina",
        presentacion:"oral",
        dosis:"medellin",
        laboratorio:"sura",
        fechacaducidad:"2028-03-15",
        contraindicaciones:"sede floreta",
        registro:"c",
        tienecopago:"true",
        fechaAfiliacion:"2024-06-5"
    }, {
        id:445, 
        nombres:"valentino gutierrez",
        presentacion:"topica",
        dosis:"medellin",
        laboratorio:"sura",
        fechacaducidad:"2026-03-15",
        contraindicaciones:"sede floreta",
        registro:"c",
        tienecopago:"true",
        fechaAfiliacion:"2024-06-5"
    }, {
        id:845, 
        nombres:"Vitamina D",
        presentacion:"oral",
        dosis:"medellin",
        laboratorio:"sura",
        fechacaducidad:"2026-03-15",
        contraindicaciones:"sede floreta",
        registro:"c",
        tienecopago:"true",
        fechaAfiliacion:"2024-06-5"
    },
]
//2.crear una referencia a una etiqueta html donde vamos a reanderizar
let fila = document.getElementById("fila")

// 3. Se recorren los datos para obtenerlo de forma separada 
medicamento.forEach( function(medicamento){
    console.log(medicamento)
    // 4. se crean columnas
    let columna=document.createElement("div")
    columna.classList.add("col")

    // 5. Se crean tarjetas 
    let tarjetas = document.createElement("div")
    tarjetas.classList.add("card","p-5","h-100","shadow")

    // 6. Se crea una etiqueta para poner el nombre del paciente 
    let nombre = document.createElement("h2")
    nombre.textContent=medicamento.nombres

    //paso final (ORDENANDO LAS CARTAS)
    tarjetas.appendChild(nombre)
    columna.appendChild(tarjetas)
    fila.appendChild(columna) 
})
