class Espada {
  constructor(tipo,ataque){
    this.tipo = tipo
    this.ataque = ataque
  }
}

class EspadaMadera extends Espada{
  constructor(tipo, ataque){
    super(tipo, ataque)
  }

  set TIPO(nuevoTipo){
    this.tipo = nuevoTipo
  }

  get TIPO(){
    return this.tipo
  }

  set ATAQUE(nuevoAtaque){
    this.ataque = nuevoAtaque
  }

  get ATAQUE(){
    return this.ataque
  }
}

class EspadaPiedra extends Espada{
  constructor(tipo,ataque){
    super(tipo,ataque)
  }

  set TIPO(nuevoTipo){
    this.tipo = nuevoTipo
  }

  get TIPO(){
    return this.tipo
  }

  set ATAQUE(nuevoAtaque){
    this.ataque = nuevoAtaque
  }

  get ATAQUE(){
    return this.ataque
  }
}

class EspadaDiamante extends Espada{
  constructor(tipo,ataque){
    super(tipo,ataque)
  }

  set TIPO(nuevoTipo){
    this.tipo = nuevoTipo
  }

  get TIPO(){
    return this.tipo
  }

  set ATAQUE(nuevoAtaque){
    this.ataque = nuevoAtaque
  }

  get ATAQUE(){
    return this.ataque
  }
}

class Zombie {
  constructor(vida){
    this.vida = vida
  }

  set VIDA(nuevaVida){
    this.vida = nuevaVida
  }

  get VIDA(){
    return this.vida
  }
  
  calcularCritico(){
    return Math.floor(Math.random() * 100);
  }

  recibirAtaque(ataque){
    if (this.vida >= 1){
      if (this.calcularCritico() < 15){
        let vidaActual = this.vida - (ataque + 10)
        this.vida = vidaActual
        return vidaActual  
      }else{
        let vidaActual = this.vida - ataque
        this.vida = vidaActual
  
        return vidaActual
      }
    }else{
      alert('El zombie ha sido eliminado')
    }
  }
}

const espadaDeMadera = new EspadaMadera()
espadaDeMadera.TIPO = 'Madera'
espadaDeMadera.ATAQUE = 15

const espadaDePiedra = new EspadaPiedra()
espadaDePiedra.TIPO = 'Piedra'
espadaDePiedra.ATAQUE = 30

const espadaDeDiamante = new EspadaDiamante()
espadaDeDiamante.TIPO = 'Diamante'
espadaDeDiamante.ATAQUE = 45

const zombie1 = new Zombie()
zombie1.VIDA = 100


document.getElementById('attackButton').addEventListener('click', function() {
  document.querySelector('.sword').style.transform = 'rotate(-45deg)';
  

  document.getElementById('resultado').innerText = `El zombie tiene ${zombie1.recibirAtaque(espadaDeMadera.ataque)} de vida y recibe `
  
  
  
  setTimeout(function() {
    document.querySelector('.sword').style.transform = 'rotate(0deg)';
  }, 500);
})

