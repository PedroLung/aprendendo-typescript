"use strict";
class Furniture {
    constructor(manufacturer = 'IKEA') {
        this.manufacturer = manufacturer;
    }
}
class Desk extends Furniture {
    kind() {
        console.log(`This is a desk made by ${super.manufacturer}`);
    }
}
class Chair extends Furniture {
    kind() {
        console.log(`This is a chair made by ${super.manufacturer}`);
    }
}
const desk = new Desk();
desk.kind();
const chair = new Chair();
chair.kind();
