import { Card } from "../models/card.js";
import { Memory } from "../models/memory.js";
import { Notifier } from "../patterns/notifier.js";

export class ControllerMemory extends Notifier
{
    
    #memory = new Memory()

    constructor(){
        super();
    }

    get memory(){ 
        return this.#memory
    }


    saveGame(){
        const myDataJson = JSON.stringify(this.#memory.toData())
        localStorage.setItem("memory", myDataJson)
    }

    newGame(){
        this.#memory.newGame(10)
        this.notify()
        this.saveGame()
    }

    loadGame(){
        const myData = localStorage.getItem("memory")
        if(myData != null){
            this.#memory.fromData(JSON.parse(myData))
            this.notify()
            return true
        }
        else{
            return false
        }
    }

    start(){
        if(this.loadGame() == false){
            this.newGame()
        }
    }


}