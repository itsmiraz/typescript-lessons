{
  // polymorphism

  class Person {
    getSleep() {
      console.log(`I am sleeping for 8 hours per day`);
    }
  }

  class Student extends Person {
    getSleep() {
      console.log(`I am sleeping for 7 hourse a day`);
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log(`I am sleeping for 6 hourse a day`);
    }
  }

  const GetSleepingOurs = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

//   GetSleepingOurs(person3);
//   GetSleepingOurs(person1);
//   GetSleepingOurs(person2);

    
    
    
    class Shape {
        getArea():number {
            return 0
        }
    }

    class Circle extends Shape {

        radius: number;
         constructor(radius: number) {
            super()
            this.radius = radius
        }


        getArea(): number {
            return Math.PI * this.radius * this.radius
        }
    }
    class Ractangle extends Shape {

        height: number;
        width: number;
         constructor(height: number,width:number) {
            super()
            this.height = height
            this.width = width
        }


        getArea(): number {
            return this.width * this.height
        }
    }
    


    const getShapeArea = (param: Shape) => {
        console.log(param.getArea());
    }


    const shape1 = new Shape()
    const shape2 = new Circle(10)
    const shape3 = new Ractangle(10, 20)
    
    getShapeArea(shape2)

    
  //
}
