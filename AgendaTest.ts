const { Agenda } = require("./Agenda");
var myLib = require ("./Agenda");

const { Person } = require("./Person");
var myLib = require ("./Person");




personaA = new Person ("José", 55, "Calle Azul 17.Bylou, 12749. Grique");
agendaA = new Agenda ([personaA]);

agendaA.printAgenda();

