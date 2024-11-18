
//Objetivo: Recibir datos del BACK y hacerles render (render=pintarlos)
// PASO 1 -> Quemar o similar los datos 

let pacientes = [
    {
        id:745, 
        nombres:"valentino gutierrez",
        fechaNacimiento:"2000-09-23",
        ciudad:"medellin",
        correo:"val@gmail.com",
        telefono:"3118654712",
        ips:"sede floreta",
        grupoIngresos:"c",
        tienePoliza:"true",
        fechaAfiliacion:"2024-06-5"
    },
    {
        "id": 748,
        "nombres": "lucia fernandez",
        "fechaNacimiento": "2001-06-22",
        "ciudad": "cartagena",
        "correo": "lucia.f@gmail.com",
        "telefono": "3176543210",
        "ips": "sede manga",
        "grupoIngresos": "c",
        "tienePoliza": "true",
        "fechaAfiliacion": "2024-07-10"
    },{
        "id": 747,
        "nombres": "martin lopez",
        "fechaNacimiento": "1995-11-10",
        "ciudad": "cali",
        "correo": "martin.l@gmail.com",
        "telefono": "3129876543",
        "ips": "sede granada",
        "grupoIngresos": "a",
        "tienePoliza": "true",
        "fechaAfiliacion": "2024-01-15"
    },
    {
        "id": 746,
        "nombres": "sofia ramirez",
        "fechaNacimiento": "1998-03-15",
        "ciudad": "bogotá",
        "correo": "sofia.r@gmail.com",
        "telefono": "3001234567",
        "ips": "sede chapinero",
        "grupoIngresos": "b",
        "tienePoliza": "false",
        "fechaAfiliacion": "2023-12-01"
    }
    
]
//2.crear una referencia a una etiqueta html donde vamos a reanderizar
let fila = document.getElementById("fila")

// 3. Se recorren los datos para obtenerlo de forma separada 
pacientes.forEach( function(paciente){
    console.log(paciente)
    // 4. se crean columnas
    let columna=document.createElement("div")
    columna.classList.add("col")

    // 5. Se crean tarjetas 
    let tarjetas = document.createElement("div")
    tarjetas.classList.add("card","p-5","h-100","shadow")

    // 6. Se crea una etiqueta para poner el nombre del paciente 
    let nombre = document.createElement("h2")
    nombre.textContent=paciente.nombres

    //paso final (ORDENANDO LAS CARTAS)
    tarjetas.appendChild(nombre)
    columna.appendChild(tarjetas)
    fila.appendChild(columna) 
})
