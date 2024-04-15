import { lista } from "./dependencies.js"

const convert = document.getElementById("btn-convert")
convert.addEventListener("click",()=>{
    const input = document.getElementById("valor").value

    let salidas = lista.infijoAPrefijo(input)
    const result = document.getElementById("Imprimir")
    let vacio = document.createElement("span")
    
    let ExpInfija = document.createElement("span")
    result.innerText = ""
    result.appendChild(vacio)

    ExpInfija.innerText = "Expresión prefija: " + salidas[1]
    result.appendChild(ExpInfija)

    let ResultadoOperacion = document.createElement("span")
    ResultadoOperacion.innerText = "Resultado de la operacion: " + salidas[0]
    result.appendChild(ResultadoOperacion)
})