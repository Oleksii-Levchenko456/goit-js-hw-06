class Storage{
    #items
    constructor(items) {
        this.#items = items
    }

    getItems() {
        return this.#items
    }

    addItem(newItem) {
        this.#items.push(newItem)
    }

    removeItem(itemToRemove) {
        this.#items = this.#items.filter(unitItem => unitItem !== itemToRemove)
        return this.#items

    }
}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
