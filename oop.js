class Car{
    constructor(name,brand,size,speed){
      if (typeof name!='string'){
        throw new Error('name must be string')        
      }   
      if (typeof brand!='string'){
        throw new Error('brand must be string')        
      }   
      if (typeof size !='number'){
        throw new Error('size must be string')        
      }   
      if (typeof speed!='number'){
        throw new Error('speed must be string')        
      }   
        this.name=name;
        this.brand=brand;
        this.size=size;
        this.speed=speed;
    }
    start(){
     console.log (`$ {this.name} is starting`)

    }
    stop(){
        console.log (`${this.name} is stoping`)
   
       }
    acc(){
        console.log (`${this.name} is accing`)
   
       }
    dec(){
        console.log (`${this.name} is decing`)
   
       }

}
var car1=new Car('bmw','bmw' , 4,220)
console.log(car1)
car1.stop()
car1.acc()
car1.dec()
