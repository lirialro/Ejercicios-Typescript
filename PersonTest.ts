const { Person } = require("./Person");
var myLib = require ("./Person");


let personaA = new Person ("José", 55, "Calle Azul 17.Bylou, 12749. Grique");

personaA.printName();

console.log(personaA.yearOfBirth(2020)); 

console.log(personaA.getAddress()); 

personaA.setAddress("Calle Verde 3. Bylou, 12749. Grique");

console.log(personaA.getAddress()); 


