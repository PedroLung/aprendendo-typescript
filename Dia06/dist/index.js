"use strict";
{
    class Movies {
        constructor(id, name) {
            this.id = id;
            this.name = name;
        }
    }
    let movie1 = new Movies(1, 'FullMetal');
    console.log(movie1.id);
    console.log(movie1);
}
{
    class Movies {
        constructor(id, name, _price) {
            this.id = id;
            this.name = name;
            this._price = _price;
        }
        get_Price() {
            return this._price;
        }
    }
    let movie1 = new Movies(1, 'FullMetal', 20);
    console.log(movie1.id);
    console.log(movie1);
}
{
    class HotelRooms {
    }
    let room = new HotelRooms();
    room.A201 = 'Andre';
    room.A202 = 'Ana';
    room.A17 = 'Marcos';
    console.log(room);
}
{
    class Person {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
        greet() {
            console.log('Hi');
        }
    }
    class Client extends Person {
        balance() {
            console.log('Your balance is $100');
        }
    }
    let Client1 = new Client('andre', 'iacono', 25);
    Client1.balance();
}
{
    class Person {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
        get greet() {
            return this.firstName + ' ' + this.lastName;
        }
    }
    class Client extends Person {
        get greet() {
            return 'Dear ' + super.greet;
        }
    }
    class Staff extends Person {
        get greet() {
            return 'Hi ' + super.greet;
        }
    }
    let client1 = new Client('andre', 'iacono', 25);
    let staff1 = new Staff('Pedro', 'Guedes', 19);
    console.log(client1.greet);
    console.log(staff1.greet);
}
