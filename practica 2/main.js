class Empleado {
    constructor(nombre,fechaIngreso,salario,id){
        this.nombre = nombre
        this.fechaIngreso = fechaIngreso
        this.salario = salario
        this.id = id
    }

    getSalario(){
        return this.salario
    }

    getNombre(){
        return this.nombre
    }

    calcularTiempoServicio(){
        let fechaActual = new Date()
        let fechaYear = fechaActual.getFullYear()
        let fechaSplit = this.fechaIngreso.split("-")
        return (fechaYear - fechaSplit[2])
    }

    setNombre(nuevoNombre){
        return (this.nombre = nuevoNombre)
    }

    setSalario(nuevoSalario){
        return (this.salario = nuevoSalario)
    }

    calcularBonificacion(){
        if (this.calcularTiempoServicio() == 1){
            return (this.salario * 0.05)
        }else if (this.calcularTiempoServicio() == 2){
            return (this.salario * 0.1)
        }else if(this.calcularTiempoServicio() == 3){
            return (this.salario * 0.15)
        }else if (this.calcularTiempoServicio() >= 4){
            return (this.salario * 0.20)
        }
    }
}

class Departamento {
    constructor(nombreDepartamento){
        this.nombreDepartamento = nombreDepartamento
        this.listaEmpleados = []
        this.gerente = []
    }

    agregarEmpleado(empleado){
        if(this.listaEmpleados.indexOf(empleado) != -1){
            console.log(`El empleado ${empleado.getNombre()} ya esta registrado`)
        }else {
            this.listaEmpleados.push(empleado)
            console.log(`El empleado ${empleado.getNombre()} ya fue inscrito con exito en el Departamento de ${this.nombreDepartamento}`)
        }
    }

    eliminarEmpleado(empleado){
        if (this.listaEmpleados.indexOf(empleado) != -1){
            this.listaEmpleados.splice(empleado)
            console.log(`El empleado ${empleado.getNombre()} ha sido eliminado con exito`)
        }else {
            console.log(`No se encuentra el empleado que desea eliminar`)
        }
    }

    CalcularGastoTotal(empleado){
        let gastoTotal = 0
        //let salarioEmpleado = empleado.getSalario()

        if ( this.listaEmpleados > 0){
            this.listaEmpleados.forEach( () => {
                gastoTotal += gastoTotal + empleado.getSalario 
            })
        }

        console.log(`El gasto total del departamento ${this.nombreDepartamento} es de $${gastoTotal}`)
    }

    asignarGerente(empleado){
        if ( empleado in this.listaEmpleados){
            console.log('funciona')
            if (this.gerente != 0){
                this.gerente.push(empleado)
                console.log(`El empleado ${empleado.getNombre()} ha sido acendido a Gerente del departamento de ${this.nombreDepartamento}`)
            }else{
                console.log('Ya existe un gerente ')
            }
        }
    }
}

let empleado1 = new Empleado('Erick', '02-12-2022', 450, 15)
let empleado2 = new Empleado('Isaías', '12-08-2020', 500, 38)
let empleado3 = new Empleado('Luis', '25-10-2023', 400, 26)
let departamentoDiseño = new Departamento('Diseño grafico')
let departamentoDesarrollo = new Departamento('Desarrollo')

//Calcular el tiempo de servicio del empleado.
console.log(`El tiempo de servicio de ${empleado1.getNombre()} es de ${empleado1.calcularTiempoServicio()} años`)
console.log(`El tiempo de servicio de ${empleado2.getNombre()} es de ${empleado2.calcularTiempoServicio()} años`)
console.log(`El tiempo de servicio de ${empleado3.getNombre()} es de ${empleado3.calcularTiempoServicio()} años`)
console.log(' ');

//Actualizar información personal del empleado.
empleado1.setNombre('Mauricio')
empleado1.setSalario(500)

//Calcular bonificaciones segun cuantos años lleve laborando.
console.log(`El bono del empleado ${empleado1.getNombre()} es de $${empleado1.calcularBonificacion()}`)
console.log(`El bono del empleado ${empleado2.getNombre()} es de $${empleado2.calcularBonificacion()}`)
console.log(`El bono del empleado ${empleado3.getNombre()} es de $${empleado3.calcularBonificacion()}`)
console.log(' ')

//Agregar empleados segun departamentos.
departamentoDesarrollo.agregarEmpleado(empleado1)
departamentoDesarrollo.agregarEmpleado(empleado2)
departamentoDiseño.agregarEmpleado(empleado3)
console.log(' ')

//Calcular el gasto total en salarios del departamento.
departamentoDesarrollo.CalcularGastoTotal()

//Asignar un gerente al departamento.
departamentoDesarrollo.asignarGerente(empleado1)