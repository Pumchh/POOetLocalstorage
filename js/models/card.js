

export class Card
{
    #value = 0

    constructor(value)
    {
        this.#value = value
    }

    get value()
    {
        return this.#value
    }

    toData(){
        return {
            value: this.#value
        }
    }

}
