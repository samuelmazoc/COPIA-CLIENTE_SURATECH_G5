// PASOS PARA CONSUMIR API CON JS 

export async function buscarPaciente() {
    // 1.Se configura la url del servicio 
//  que se desea consumir 

const URL="http://localhost:8080/api/paciente";

// 2. se congigura la peticion del servicio a consumir 

let peticion = {
    method:"GET"
}

// 3.CONSUMIR API 

let respuestaServidor = await fetch(URL, peticion)
let pacientes = await respuestaServidor.json()
return pacientes
}

export async function registrarPaciente(datosPaciente) {
    const URL ="http://localhost:8080/api/paciente"
    let peticion = {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datosPaciente)
    }
    let respuestaInicial=await fetch(URL,peticion)
    let respuestaFinal = await respuestaInicial.json()
    return respuestaFinal
}
