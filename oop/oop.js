class car{
    constructor(name,color,year){
      if(typeof name !=='string' ){
        throw new Error('name must be string')
      }
      if(typeof color !=='string' ){
        throw new Error('color must be string')
      }
      if(typeof year !=='number' ){
        throw new Error('name must be number')
      }
        this.name=name
        this.color=color
        this.year=year
    }
    start(){
        console.log(`${this.name}is starting`)
    }
}
var car1=new car('bmw','black',2020)
console.log(car1)
car1.start()