class Vector 
{
    private elements = new Array();
  

    constructor (n: number, k: number) {
            for (let i=0; i<n; i++)
            {
                let aleatorio = Math.round(Math.random() *k);  
                this.elements.push(aleatorio);
            }
    }

    public print ()
    { 
        console.log("Elements = " + this.elements)
    }

    public add (v1: Vector) 
    {
        let sumavectores = new Array();
        for (let i=0; i<this.elements.length; i++)
        {
           let suma = this.elements[i] + v1.elements[i];
           sumavectores.push(suma);
        }
        console.log("Suma = " + sumavectores);
    }

    public subs (v1: Vector) 
    {
        let restavectores = new Array();
        for (let i=0; i<this.elements.length; i++)
        {
           let resta = this.elements[i] - v1.elements[i];

           restavectores.push(resta);
        }
        console.log("Resta = " +restavectores)
    }

    public mult (v1: Vector)
    {
        let multiplicavectores = new Array();
        for (let i=0; i<this.elements.length; i++)
        {
           let producto = this.elements[i] * v1.elements[i];

           multiplicavectores.push(producto);
        }
        console.log("Producto = " + multiplicavectores)
    }

    public multNumber (n: number) 
    {
        let multiplicaxnumero = new Array();
        for (let i=0; i<this.elements.length; i++)
        {   
            let producto2 = this.elements[i] * n;
            multiplicaxnumero.push(producto2);
        }
        console.log("Vector x número = " + multiplicaxnumero);
    }




}

module.exports = {Vector}