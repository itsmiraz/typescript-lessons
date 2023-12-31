{
  //

  // idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // const vehicle1: Vehicle1 = {
  //     name: "Toyota",
  //     model:1122
  // }

  // real impleamations
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("Im starting the engine");
      }
      stopEngine(): void {
          console.log('Im stoping the engine');
      }
      move(): void {
          console.log('i am moving he engine');
      }
    }

    // Abstract - idea
  abstract class Car2 implements Vehicle1 {
   abstract  startEngine(): void 
   abstract  stopEngine():  void
   abstract  move(): void 
    }

    
    class ToyotaCar extends Car2{
        startEngine(): void {
            console.log('i am starting the car engine'); 
        }
        stopEngine(): void {
            console.log('i am stoping');
        }
        move(): void {
            console.log('i am moving the card');
            
        }
    }

    // const hondaCar = new Car2()


    // hondaCar.startEngine


    // const toyotaCar = new Car()
    // toyotaCar.startEngine()


    // abstact class 
    class Vehicle2 {

    }


  //
}
