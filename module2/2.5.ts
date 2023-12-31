{
  // Function With Generics

  const createArray = (param: string): string[] => {
    return [param];
  };
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  // const res1 = createArray("BF");
  // const res2 = createArrayWithGeneric<Number>(13);

  // type User = { id: number; name: string };
  // const resObject = createArrayWithGeneric<User>({ id: 22, name: "miraj" });

  const createArrayWithTuple = <T, Q>(param: T, param2: Q): [T, Q] => {
    return [param, param2];
  };
  const res1 = createArrayWithTuple<string, number>("BF", 121);
  const res2 = createArrayWithTuple<Number, { name: string }>(13, {
    name: "bd",
  });

  type User = { id: number; name: string };
  const resObject = createArrayWithGeneric<User>({ id: 22, name: "miraj" });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next level web dev";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({name:"mr.z",email:"x2emial.com"})

  //
}
