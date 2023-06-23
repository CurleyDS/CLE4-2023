import {Actor} from "excalibur"
import { Item } from "./item.js"

export class Inventory extends Actor {
    items

    constructor() {
        super()
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

    hasItem(itemName) {
        if (this.items.find(item => item.name == itemName)) {
            return true
        } else {
            return false
        }
    }

    onPreUpdate(engine, _delta) {
        for (let x=0; x < this.items.length; x++)
            if(!this.children.find(element => element.name === this.items[x].name)){
                this.addChild(this.items[x])
            }
    }

}