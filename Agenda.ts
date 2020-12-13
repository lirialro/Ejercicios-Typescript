const { Person } = require("./Person");
var myLib = require ("./Person");



class Agenda 
{
    public people: Person[];
    

    constructor (people: Person[]) {
        this.people = people;
   
    }
    
    printAgenda () 
    {     
        for (var i=0; i<this.people.length; i++)
        
        {
            let texto = "Name: " + this.people[i].name + "\n" +"Age: " + this.people[i].age + "\n" +"Address: " + this.people[i].getAddress(); 
            
            console.log (texto);              
        }   

    } 
   

}

module.exports = {Agenda}