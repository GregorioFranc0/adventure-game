//const { Room } = require("./room");
const { Player } = require("./player");
const worldData = require("../data/world-data")

class Item {
  constructor(name, description, isFood = false) {
    this.name = name;
    this.description = description;
    this.isFood = isFood;
  }


}

module.exports = {
  Item,
};
