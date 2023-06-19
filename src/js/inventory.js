import { Item } from "./item.js"

export class Inventory {
    items

    constructor() {
        this.items = []
    }

    addToInventory(item) {
        // check of item al bestaat
        if (this.items.find(element => element.name == item.name)) {
            // voeg toe aan aantal van huidige item
            const itemIndex = this.items.findIndex(element => element.name == item.name)
            this.items[itemIndex].amount++
        } else {
            // voeg nieuwe item toe
            this.items.push(item)
        }
    }
}