class Book 
{
    private title: string;
    private nPages: number;
    private issn: string;
    private author: string;
    private editorial: string;

    constructor (title: string, nPages: number, issn: string, author: string, editorial: string) {
        this.title = title;
        this.nPages = nPages;
        this.issn = issn;
        this.author = author;
        this.editorial = editorial;
    }
    

    getTitle(): string
    {
        return this.title
    }

    setTitle (title: string)
    {
        this.title = title
    }

    getNPages(): number
    {
        return this.nPages
    }

    setNPages (nPages: number)
    {
        this.nPages = nPages
    }
    
    getIssn(): string
    {
        return this.issn
    }

    setIssn (issn: string)
    {
        this.issn = issn
    }

    getAuthor(): string
    {
        return this.author
    }

    setAuthor (author: string)
    {
        this.author = author
    }

    getEditorial(): string
    {
        return this.editorial
    }

    setEditorial (editorial: string)
    {
        this.editorial = editorial
    }

    public toString (): string
    {

        return "Title - " + this.title + "\n" +"Number of Pages - " + this.nPages + "\n" +"ISSN - " + this.issn + "\n" + "Author - " + this.author + "\n" + "Editorial - " + this.editorial + "\n";
    }
}

module.exports = {Book}