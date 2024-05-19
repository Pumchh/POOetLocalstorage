import { Card } from './card.js'


export class Memory
{

    #cards = []

    constructor(){
        this.#cards = []
    }

    newGame(pairsNumber){
        let valueCard = 0x1F90C

        for (let i = 0; i < pairsNumber; i++)
        {
            this.#cards.push(new Card(valueCard))
            this.#cards.push(new Card(valueCard))
            valueCard++
        }
        
        this.#cards.sort(() => Math.random() - 0.5)
        
    }

    getCardsNumber(){
        return this.#cards.length
    }

    getCard(index){
        return this.#cards[index]
    }

    toData(){

        let tabCards = []

        for(let i=0; i<this.getCardsNumber(); i++){
            tabCards.push(this.getCard(i).toData())
        }
        console.log(tabCards)

        return {
            cards: tabCards
        }
    }

    fromData(object){
        this.#cards = []
        for(let i=0; i<object.cards.length; i++){
            this.#cards.push(new Card(object.cards[i].value))
        }
    }
    
}
