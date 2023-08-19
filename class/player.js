//const { Food } = require('./food');
// const Item = require('../class/item');
// const Room = require('./room');
//const { Player } = require("../class/player.js");
const { Room } = require("../class/room.js");
const { Item } = require("../class/item.js");
const { Food } = require("../class/food.js");
const { World } = require("../class/world");

const worldData = require('../data/world-data');

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0; i < this.items.length; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {
        let foundItem = this.currentRoom.getItemByName(itemName)
        if (foundItem) {
            this.items.push(foundItem);

            console.log(this.items);
        }

    }



    dropItem(itemName) {
        // Drops an item the player is holding into their current room

        // Your code here
    }

    eatItem(itemName) {
        // Allow the player to eat food items, but not non-food items

        // Your code here
    }

    getItemByName(name) {
        for (let i = 0; i < this.items.length; i++) {
            //console.log(Player.items);
            if (this.items[i].name === name) {
                return this.items.splice(i, 1)[0];
            }

        }
    }
}


// console.log(Room.items);
//console.log(Player.getItemByName('rock'));

module.exports = {
    Player,
};
