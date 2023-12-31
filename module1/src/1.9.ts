{
  // Type Alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Miraj",
    age: 20,
    gender: "male",
    contactNo: "01740065272",
    address: "Gazipur",
  };

  const student2: Student = {
    name: "hasam",
    age: 22,
    gender: "male",
    address: "Cta",
  };

  type Add = (number1: number, number2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;

  //
}
