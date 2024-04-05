export class Node {
    #prev
    #data

    constructor(element){
        this.#data = element
        this.#prev = undefined
    }

    getData(){
        return this.#data
    }
    
}