class ContenedorDB {
    constructor(cliente, coleccion) {
        this.cliente = cliente;
        this.coleccion = coleccion;
        this.db = "dbPrueba";
    }}

    class Rectangle {
        constructor(height, width) {
          this.height = height;
          this.width = width;
        }
        area() {
            const a = this.aheight*this.awidth
            return a
        }
      }

    

const cont = new ContenedorDB ('hola','comoTeVa')
const rect = new Rectangle (10,10)
console.log(rect.area());

console.log(rect);
console.log (cont)

