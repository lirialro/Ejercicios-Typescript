const { Book } = require("./Book");
var myLib = require ("./Book");
const { Library } = require("./Library");
var myLib = require ("./Library");

Book1 = new Book ("Texturas", 190, "BC2336H33", "James R.", "R Editions");
Book2 = new Book ("Paleta de colores", 150, "234YH67", "Carol H.", "Cor Edition");


LibraryA = new Library ([Book1, Book2], "Calle Mares 233, Nipe, 23765. Terme.", "Camila Thompson");

console.log (LibraryA.getAddress());
LibraryA.setAddress("Calle Dra 43, Nipe, 34522, Terme.");
console.log (LibraryA.getAddress());

console.log (LibraryA.getManager());
LibraryA.setManager("Andrew Hill");
console.log (LibraryA.getManager());

LibraryA.toString();

LibraryA.getNumberOfBooks();

LibraryA.findByAuthor("Carol H.");

