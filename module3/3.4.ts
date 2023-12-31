{
  // instance of guard

  class Animal {
    name: string;
    specis: string;

    constructor(name: string, specis: string) {
      this.name = name;
      this.specis = specis;
    }

    makeSound() {
      console.log("i make sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, specis: string) {
      super(name, specis);
    }

    makeBark() {
      console.log(`I am barking`);
    }
  }
  class Cat extends Animal {
    constructor(name: string, specis: string) {
      super(name, specis);
    }

    makeMeow() {
      console.log(`I am meowing`);
    }
  }

  // Smarter way

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeow();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("Dog bhai", "Dog");
  const cat = new Cat("cat bon", "cat");

  getAnimal(cat);

  //
}
