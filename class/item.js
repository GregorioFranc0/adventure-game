//const { Room } = require("./room");
const { Player } = require("./player");
const worldData = require("../data/world-data")

class Item {
  constructor(name, description, isFood = false) {
    this.name = name;
    this.description = description;
    this.isFood = isFood;
  }

  static getItems(...items) {
    return items.map((item) => item.name);
  }

}
const item = new Item("fork", "I can eat with this I guess");
console.log(item)
module.exports = {
  Item,
};
