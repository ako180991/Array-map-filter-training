class Vehicle {

  constructor(model, color){

    this.model = model
    this.color = color
  }

  printmodel(){
    console.log(`My model is ${this.name} and his color is ${this.color}`)
  }


}

const Mustang = new Vehicle('MUSTANG', 'red')

console.log(Mustang.printmodel())



class Car extends Vehicle {

  constructor(model, color,) {
    super(model, color)
  
}

printmodel(){
  console.log(`My model is ${this.name} and his color is ${this.color}`)
}
}

const renault = new Car ('Voiture', 'green')
renault.printmodel()











