class Libro {
    constructor(titulo, autor){
        this._titulo = titulo
        this._autor = autor
        this._disponibilidad = true
    }

    verEstado(){
        return this._disponibilidad
    }

    prestar(){
        this._disponibilidad = false
    }

}

class Socio{
    constructor(nombre,identificacion){
        this._nombre = nombre
        this._identificacion = identificacion
        this._libros = []
    }

    prestarLibro(libro){
        if (libro.verEstado()){
            this._libros.push(libro)
            libro.prestar()
        }else{
            console.log('El libro no esta disponible')
        }
    }

    mostrarLibros(){
        if (this._libros.length > 0){
            this._libros.forEach(e =>{
                console.log(e)
            })
        }else{
            console.log('Ningun libro prestado aun')
        }
    }
}

const libro1 = new Libro('Matemáticas','Valdor')
const libro2 = new Libro('La teoria del todo','Stephen Hawking')

const socio1 = new Socio('Luis Enrrique',123456)
const socio2 = new Socio('Eliseo Guzman',654321)

socio1.prestarLibro(libro1)
socio1.mostrarLibros()
socio2.prestarLibro(libro2)
socio2.mostrarLibros()