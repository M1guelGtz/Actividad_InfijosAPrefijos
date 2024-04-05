import { Node } from "./Node.js"

export class StackLinkedList {
    #peek = undefined
    #count = 0

    push(element){
        const node = new Node(element)
        if(this.#count == 0){
            this.#peek = node
        }else {
            node.prev = this.#peek
            this.#peek = node
        }
        this.#count++
    }
    peek(){
        return this.#peek.getData()
    }
    pop(){
        if(this.#count != 0){
            let deleted = this.#peek.getData()
            if(this.#count == 1){
                this.#peek = undefined
            } else{
                this.#peek = this.#peek.prev 
            }
            this.#count--
            return deleted
            
        }else {
            return undefined
        }
        
    }
    isEmpty(){
        return this.#count == 0
    }
    size(){
        return this.#count
    }
}