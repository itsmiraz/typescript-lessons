{
  //oop- inheritence

  class Person {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {}

    getSleep(numofHours: number) {
      console.log(`${this.name} will sleep for ${numofHours}`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }
  class Teacher extends Person {
    constructor(
      name: string,
      age: number,
      address: string,
      public designation: string
    ) {
      super(name, age, address);
    }

    takeCls(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass}`);
    }
  }

  const Student1 = new Student("Miraj", 23, "Bd");
  const teacher = new Teacher("Teacger", 43, "Bd", "proffessor");

  // Student1.
  //
}
