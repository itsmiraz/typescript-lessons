{
  // interface

  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  type UserWithRoll1 = User1 & { role: string };

  interface UserWithRoll2 extends User2 {
    role: string;
  }

  const user1: UserWithRoll1 = {
    name: "miraj",
    age: 20,
    role: "mode",
  };
  const user2: UserWithRoll2 = {
    name: "miraj",
    age: 20,
    role: "mode",
  };

  type Role1 = number[];
  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber1: Roll2 = [1, 23, 23, 23, 32, 23, 23, 23];

  type Add = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add = (num1, num2) => num1 + num2;

    
    
    // Array and Fn => Type Elias 
    // Object => interface
    
  //
}
