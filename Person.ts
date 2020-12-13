class Person
{
    public name: string;
    public age: number;
    private address: string

    constructor (name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    

    printName () {

        console.log (this.name);
    }


    yearOfBirth (currentYear) : number 
    {
    return (currentYear- this.age);
    }

    getAddress(): string
    {
        return this.address
    }
    setAddress (address: string)
    {
        this.address = address
    }
    

}
module.exports = {Person}