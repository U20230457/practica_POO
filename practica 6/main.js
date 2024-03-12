class Cubo {
    constructor(nombre,textura,nombreimg,dimencion){
        this.nombe = nombre = nombre
        this.textura = textura
        this.nombreimg = nombreimg
        this.dimencion = dimencion
    }

}

class BlocTierra extends Cubo {
    constructor(nombre,textura,nombreimg,dimencion,cantidadItems){
        super(nombre,textura,nombreimg,dimencion)
        this.cantidadItems = cantidadItems
    }

    set IMG(nuevaIMG){
        this.nombreimg = nuevaIMG
    }

    get IMG(){
        return this.nombreimg
    }

    mostrarDatos(){
        return `El bloque ${this.nombe} da ${this.cantidadItems}`
    }

}

class BlocDiamante extends Cubo {
    constructor(nombre,textura,nombreimg,dimencion,cantidadItems){
        super(nombre,textura,nombreimg,dimencion)
        this.cantidadItems = cantidadItems
    }

    set IMG(nuevaIMG){
        this.nombreimg = nuevaIMG
    }

    get IMG(){
        return this.nombreimg
    }

    mostrarDatos(){
        return `El bloque ${this.nombe} da ${this.cantidadItems}`
    }
}

class BlocCarbon extends Cubo {
    constructor(nombre,textura,nombreimg,dimencion,cantidadItems){
        super(nombre,textura,nombreimg,dimencion)
        this.cantidadItems = cantidadItems
    }

    set IMG(nuevaIMG){
        this.nombreimg = nuevaIMG
    }

    get IMG(){
        return this.nombreimg
    }

    mostrarDatos(){
        return `El bloque ${this.nombe} da ${this.cantidadItems}`
    }
}

class BlocMadera extends Cubo {
    constructor(nombre,textura,nombreimg,dimencion,cantidadItems){
        super(nombre,textura,nombreimg,dimencion)
        this.cantidadItems = cantidadItems
    }

    set IMG(nuevaIMG){
        this.nombreimg = nuevaIMG
    }

    get IMG(){
        return this.nombreimg
    }

    mostrarDatos(){
        return `El bloque ${this.nombe} da ${this.cantidadItems}`
    }
}

let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')

let imgCubo = document.getElementById('cuboimg')
let texto = document.getElementById('text')
let imgTierra = 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/15/Grass_Block_JE4.png'
let imgDiamante = 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c8/Block_of_Diamond_JE5_BE3.png'
let imgCarbon = 'https://minecraft.wiki/images/Block_of_Coal_JE3_BE2.png'
let imgMadera = 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c1/Oak_Planks.png'


let bloqueTierra = new BlocTierra('Tierra','Tierra','','Overworld',1)
bloqueTierra.IMG = imgTierra

let bloqueDiamante = new BlocDiamante('Diamante','Diamante','','Overworld',9)
bloqueDiamante.IMG = imgDiamante

let bloqueCarbon = new BlocCarbon('Carbon','Textura','','Overwordl',9)
bloqueCarbon.IMG= imgCarbon

let bloqueMadera = new BlocMadera('Madera','Madera','','Overwordl',1)
bloqueMadera.IMG= imgMadera

btn1.addEventListener('click', () => {
    
    texto.innerText = `${bloqueTierra.mostrarDatos()}`

    imgCubo.setAttribute('src', imgTierra)
})

btn2.addEventListener('click', () => {
    
    texto.innerText = `${bloqueDiamante.mostrarDatos()}`

    imgCubo.setAttribute('src', imgDiamante)
})

btn3.addEventListener('click', () => {
    
    texto.innerText = `${bloqueCarbon.mostrarDatos()}`

    imgCubo.setAttribute('src', imgCarbon)
})

btn4.addEventListener('click', () => {
    
    texto.innerText = `${bloqueMadera.mostrarDatos()}`

    imgCubo.setAttribute('src', imgMadera)
})