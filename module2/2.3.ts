{
  // Generics
  //  Geberics provide a way to write code that works with a variety of data types while maintaining type safety. They allow you to create functions, classes, or interfaces that can work with different types without specifying the exact type in advance. Instead, the type is determined when the code is used
  type GenericArray<T> = Array<T>;

  // const rollNumbers: number[] = [3, 4, 4]
  const rollNumbers: GenericArray<number> = [3, 4, 4];
  // const mentors : string[] = ['mr.Z','mr.x']
  const mentors: GenericArray<string> = ["mr.Z", "mr.x"];
  // const bullArray: boolean[] = [false, true]
  const bullArray: GenericArray<Boolean> = [false, true];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "miraj",
      age: 20,
    },
    {
      name: "jhanker",
      age: 40,
    },
  ];

  interface User {
    name: string;
    age: number;
  }
  type GenericTouple<x, y> = [x, y];
  // Generic Tuple
  const manus: GenericTouple<string, string> = ["Mr. X", "Mr. Y"];

  const userWithId: GenericTouple<number, { name: string; email: string }> = [
    121,
    { name: "miraj", email: "a@gmail.com" },
  ];

  //
}
