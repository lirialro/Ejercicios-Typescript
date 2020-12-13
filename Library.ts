import { title } from "process";

class Library 
{
    private books: Book[];
    private address: string;
    private manager: string;
  

    constructor (books: Book[], address: string, manager: string) {
        this.books = books;
        this.address = address;
        this.manager = manager;
 
    }
    

    getAddress(): string
    {
        return this.address
    }

    setAddress (address: string)
    {
        this.address = address
    }

    getManager(): string
    {
        return this.manager
    }

    setManager (manager: string)
    {
        this.manager = manager
    }
    
    public toString ()
    {
        for (let i=0; i<this.books.length; i++)
        {
                
               console.log ("Libro"+[i]+":"+"\n"+"Title - " + this.books[i].getTitle() + "\n" +"Number of Pages - " + this.books[i].getNPages() + "\n" +"ISSN - " + this.books[i].getIssn() + "\n" + "Author - " + this.books[i].getAuthor() + "\n" + "Editorial - " + this.books[i].getEditorial() + "\n")
        }
    }

    public getNumberOfBooks (): number

    {   
        return this.books.length;                
    }

    public findByAuthor (author: string): Book[]
    {   let libros = new Array();
        for (let i=0; i<this.books.length; i++)
        {
            if (this.books[i].getAuthor() == author)
            {
                libros.push(this.books[i]);
            }
        }
        return libros;                
    }


}

module.exports = {Library}