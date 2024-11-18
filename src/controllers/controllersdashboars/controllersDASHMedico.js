
//Objetivo: Recibir datos del BACK y hacerles render (render=pintarlos)
// PASO 1 -> Quemar o similar los datos 

let medico = [
    {
        id:745, 
        nombres:"valentino gutierrez",
        matriculaprofesional:"165625626",
        especialidad:"cardiotoraxica",
        salario:"100000",
        ips:"sede floreta",
        correo:"val@gmail.com",
        telefono:"c",
        direccion:"cra 32 84 75",
        disponiblefindesemana:"si"
    },  {
        id:45, 
        nombres:"sara guzman",
        matriculaprofesional:"165625626",
        especialidad:"cardiotoraxica",
        salario:"100000",
        ips:"sede floreta",
        correo:"val@gmail.com",
        telefono:"c",
        direccion:"cra 32 84 75",
        disponiblefindesemana:"si"
    },  {
        id:845, 
        nombres:"andres delgado",
        matriculaprofesional:"165625626",
        especialidad:"cardiotoraxica",
        salario:"100000",
        ips:"sede floreta",
        correo:"val@gmail.com",
        telefono:"c",
        direccion:"cra 32 84 75",
        disponiblefindesemana:"si"
    },  {
        id:445, 
        nombres:"geraldine lond",
        matriculaprofesional:"165625626",
        especialidad:"cardiotoraxica",
        salario:"100000",
        ips:"sede floreta",
        correo:"val@gmail.com",
        telefono:"c",
        direccion:"cra 32 84 75",
        disponiblefindesemana:"si"
    },  {
        id:545, 
        nombres:"sam gutierrez",
        matriculaprofesional:"165625626",
        especialidad:"cardiotoraxica",
        salario:"100000",
        ips:"sede floreta",
        correo:"val@gmail.com",
        telefono:"c",
        direccion:"cra 32 84 75",
        disponiblefindesemana:"si"
    },

]
//2.crear una referencia a una etiqueta html donde vamos a reanderizar
let fila = document.getElementById("fila")

// 3. Se recorren los datos para obtenerlo de forma separada 
medico.forEach( function(medico){
    console.log(medico)
    // 4. se crean columnas
    let columna=document.createElement("div")
    columna.classList.add("col")

    // 5. Se crean tarjetas 
    let tarjetas = document.createElement("div")
    tarjetas.classList.add("card","p-5","h-100","shadow")

    // 6. Se crea una etiqueta para poner el nombre del paciente 
    let nombre = document.createElement("h2")
    nombre.textContent=medico.nombres

    //paso final (ORDENANDO LAS CARTAS)
    tarjetas.appendChild(nombre)
    columna.appendChild(tarjetas)
    fila.appendChild(columna) 
})
