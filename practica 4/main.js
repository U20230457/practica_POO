class Producto {
    constructor(nombre,cantidad,precio){
        this.nombre = nombre
        this.cantidad = cantidad
        this.precio = precio
    }

    set Nombre(nuevoNombre){
        this.nombre = nuevoNombre
    }

    get Nombre(){
        return this.nombre
    }

    set Cantidad(nuevaCantidad){
        this.cantidad = nuevaCantidad
    }

    get Cantidad(){
        return this.cantidad
    }

    set Precio(nuevoPrecio){
        this.precio = nuevoPrecio
    }

    get Precio(){
        return this.precio
    }
}

class Pedido extends Producto{
    constructor(nombre,cantidad,precio,nombreCliente,){
        super(nombre,cantidad,precio)
        this.nombreCliente = nombreCliente
        this.productos = []
    }

    agregarProducto(producto){
        this.productos.push(producto)
    }

    eliminarProductoInventario(producto){
        
    }

    calcularTotal(){
        let total = 0
        this.productos.forEach(e => {
            total += e.precio
        })
    }
}


const producto1 = new Producto('TV', 19, 700)
const producto2 = new Producto('Laptop',4,400)
const producto3 = new Producto('Smartphone',30,550)
const producto4 = new Producto('Control de TV',20,20)
const producto5 = new Producto('Cargador de laptop',10,50)
const producto6 = new Producto('Cargador de smartphone',25,15)

const inventario = [producto1,producto2,producto3,producto4,producto5,producto6]

const table = document.getElementById('table')


table.innerHTML = `
    <tr>
        <th>Producto</th>
        <th>Precio</th>
        <th>Cantidad</th>
    </tr>

`