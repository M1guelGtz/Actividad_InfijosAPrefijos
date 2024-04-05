import { crearLista } from "../controllers/dependencies.js"

let prefijos = crearLista()
let OperadoresAritmeticos = crearLista()

export const convertirExpresion = function(expresion){
    expresion = expresion.match(/[0-9]+|[-+*/()]/g)
    expresion = expresion.reverse()
    expresion.forEach(element => {
        switch (element) {
            case "+":
                OperadoresAritmeticos.push(element)
                break;
            case "-":
                OperadoresAritmeticos.push(element)
                break;
            case "*":
                OperadoresAritmeticos.push(element)
                break;
            case "/":
                OperadoresAritmeticos.push(element)
                break;
            
            case "(":
                OperadoresAritmeticos.push(element)
                OperadoresAritmeticos.pop()
                while(OperadoresAritmeticos.peek() != ")")
                    prefijos.push(OperadoresAritmeticos.pop())
                    OperadoresAritmeticos.pop()
                break;
            case ")":
                OperadoresAritmeticos.push(element)
                break;
            default:
                prefijos.push(element)
                break;
        }
    });
    
    while(!(OperadoresAritmeticos.isEmpty()))
        prefijos.push(OperadoresAritmeticos.pop())
    expresion = []
    while(prefijos.size() != 0)
        expresion.push(prefijos.pop())
    let expresionPrefija = expresion.join() 
    expresion.reverse()
    let resultado
    expresion.forEach(element => {
        prefijos.push(element)
        switch (element) {
            case "+":
                prefijos.pop()
                resultado = Number(prefijos.pop())
                resultado += Number(prefijos.pop())
                prefijos.push(resultado)
                break;
            case "-":
                prefijos.pop()
                resultado = Number(prefijos.pop())
                resultado -= Number(prefijos.pop())
                prefijos.push(resultado)
                break;
            case "*":
                prefijos.pop()
                resultado = Number(prefijos.pop())
                resultado *= Number(prefijos.pop())
                prefijos.push(resultado)
                break;
            case "/":
                prefijos.pop()
                resultado = Number(prefijos.pop())
                resultado /= Number(prefijos.pop())
                prefijos.push(resultado)
                break;
            default:
                break;
        }
    });
    return [prefijos.pop(),expresionPrefija]
}