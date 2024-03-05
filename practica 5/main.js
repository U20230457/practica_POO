class CuentaBancaria {
    constructor(nombre,saldo,numeroCuenta){
        this.nombre = nombre
        this.saldo = saldo
        this.numeroCuenta = numeroCuenta
    }

    set Nombre(nuevoNombre){
        this.nombre = nuevoNombre
    }

    get Nombre(){
        return this.nombre
    }

    set Saldo(nuevoSaldo){
        this.saldo = nuevoSaldo
    }

    get Saldo(){
        return this.saldo
    }

    abonar(cantidad){
        if (cantidad >= 0){
            return this.saldo = this.saldo + cantidad
        }else{
            alert('La cantidad ingresada no es valida')
        }
    }

    retirar(cantidad){
        return this.saldo = this.saldo - cantidad
        
    }
}

const buttonRetiro = document.getElementById('retiro')
const buttonAbono = document.getElementById('abono')
const nombre = document.getElementById('nombre').value
const cuenta = document.getElementById('numeroCuenta').value

let cuenta1 = new CuentaBancaria()
cuenta1.Nombre=''
cuenta1.saldo= Number(0)

buttonAbono.addEventListener('click', ()=>{
    const nombre = document.getElementById('nombre').value
    const cuenta = document.getElementById('numeroCuenta').value
    const cantidad = parseFloat(document.getElementById('cantidad').value)
    const mensaje = document.getElementById('resultado')
    
    cuenta1.abonar(cantidad)

    cuenta1.Nombre = nombre
    cuenta1.numeroCuenta = cuenta
    
    mensaje.innerHTML = `
        <h4>Transaccion Realizada</h4>
        <p>Cliente: ${cuenta1.nombre}</p>
        <p>Número de cuenta: ${cuenta1.numeroCuenta}</p>
        <p>Saldo: ${cuenta1.saldo}</p>
    `

    console.log(cuenta1)
})

buttonRetiro.addEventListener('click', ()=>{
    const cantidad = parseFloat(document.getElementById('cantidad').value)
    const nombre = document.getElementById('nombre').value
    const cuenta = document.getElementById('numeroCuenta').value
    const mensaje = document.getElementById('resultado')

    if (cantidad > cuenta1.saldo){
        alert('La cantidad a retirar es mayor al saldo actual de la cuenta')
    }else{
        cuenta1.Saldo = cuenta1.retirar(cantidad)
    }

    cuenta1.Nombre = nombre
    cuenta1.numeroCuenta = cuenta

    mensaje.innerHTML = `
        <h4>Transaccion Realizada</h4>
        <p>Cliente: ${cuenta1.nombre}</p>
        <p>Número de cuenta: ${cuenta1.numeroCuenta}</p>
        <p>Saldo: ${cuenta1.saldo}</p>
    `
    console.log(cuenta1)
})