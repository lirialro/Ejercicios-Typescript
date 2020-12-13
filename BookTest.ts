const { Book } = require("./Book");
var myLib = require ("./Book");





BookA = new Book ("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");

console.log (BookA.getTitle())
BookA.setTitle("Javascript");
console.log (BookA.getTitle())

console.log (BookA.getNPages())
BookA.setNPages(150);
console.log (BookA.getNPages())

console.log (BookA.getIssn())
BookA.setIssn("D455y89");
console.log (BookA.getIssn())

console.log (BookA.getAuthor())
BookA.setAuthor("Jane R.");
console.log (BookA.getAuthor())

console.log (BookA.getEditorial())
BookA.setEditorial("Blue");
console.log (BookA.getEditorial())

BookA.toString();