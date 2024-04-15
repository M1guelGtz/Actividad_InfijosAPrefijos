import { StackLinkedList } from "./StackLinkedList.js";

export class Conversion {
    #prefijos
    #operadoresAritmeticos

    constructor(){
        this.#operadoresAritmeticos = new StackLinkedList()
        this.#prefijos = new StackLinkedList()
    }
    infijoAPrefijo(expresion){
        expresion = expresion.match(/[0-9]+|[-+*/()]/g)
        expresion = expresion.reverse()

        expresion.forEach(element => {
            switch (element) {
                case "+":
                    this.#operadoresAritmeticos.push(element)
                    break;
                case "-":
                    this.#operadoresAritmeticos.push(element)
                    break;
                case "*":
                    this.#operadoresAritmeticos.push(element)
                    break;
                case "/":
                    this.#operadoresAritmeticos.push(element)
                    break;
                
                case "(":
                    this.#operadoresAritmeticos.push(element)
                    this.#operadoresAritmeticos.pop()
                    while(this.#operadoresAritmeticos.peek() != ")")
                        this.#prefijos.push(this.#operadoresAritmeticos.pop())
                    this.#operadoresAritmeticos.pop()
                    break;
                case ")":
                    this.#operadoresAritmeticos.push(element)
                    break;
                default:
                    this.#prefijos.push(element)
                    break;
                
            }
            
        });

        
        
        while(!(this.#operadoresAritmeticos.isEmpty()))
            this.#prefijos.push(this.#operadoresAritmeticos.pop())

        expresion = []
        


        while(this.#prefijos.size() != 0)
            
            expresion.push(this.#prefijos.pop())  

        let expresionPrefija = expresion.join() 

        expresion.reverse()

    
        
        let resultado
        
        expresion.forEach(element => {
            this.#prefijos.push(element)
            switch (element) {
                case "+":
                    this.#prefijos.pop()
                    resultado = Number(this.#prefijos.pop())
                    resultado += Number(this.#prefijos.pop())
                    this.#prefijos.push(resultado)
                    break;
                case "-":
                    this.#prefijos.pop()
                    resultado = Number(this.#prefijos.pop())
                    resultado -= Number(this.#prefijos.pop())
                    this.#prefijos.push(resultado)
                    break;
                case "*":
                    this.#prefijos.pop()
                    resultado = Number(this.#prefijos.pop())
                    resultado *= Number(this.#prefijos.pop())
                    this.#prefijos.push(resultado)
                    break;
                case "/":
                    this.#prefijos.pop()
                    resultado = Number(this.#prefijos.pop())
                    resultado /= Number(this.#prefijos.pop())
                    this.#prefijos.push(resultado)
                    break;
                default:
                    break;
            }
        });

        return [this.#prefijos.pop(),expresionPrefija]
        }
}