import { Observer } from "../patterns/observer.js";
import { ControllerMemory } from "../controllers/controller-memory.js";


export class ViewMemory extends Observer
{
    #controllerMemory = new ControllerMemory();

    constructor(controllerMemory)
    {   
        super();

        this.#controllerMemory = controllerMemory
        this.#controllerMemory.addObserver(this)

        document.querySelector('div').addEventListener('click', () => {
            this.#controllerMemory.createCard()
        })

    }

    displayCard(card)
    {
        const cardElement = document.createElement('div')
        cardElement.classList.add('card')
        document.querySelector('.cards').appendChild(cardElement)
        cardElement.innerHTML = ("&#x" + card.value.toString(16)).toString(16)
        //console.log(card.value)
    }

    displayCards(){
        for(let i = 0; i < this.#controllerMemory.memory.getCardsNumber(); i++){
            this.displayCard(this.#controllerMemory.memory.getCard(i))
        }
    }

    notify()
    {
        this.displayCards()
    }
}