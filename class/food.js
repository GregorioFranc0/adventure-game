//const { Room } = require("./room");
const { Item } = require("./item");

class Food extends Item {

    constructor(name, description, isFood = true) {
        super(name, description, isFood)

    }


}
const tuna = new Food("tuna", "i can't eat this dammit", true);
console.log(tuna);
