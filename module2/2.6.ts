{
  // constraints

  const addCourseToStudent = <T extends  { id : number ,name:string, email:string}>(student: T) => {
    const course = "Next level web dev";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    id: 1,
    name: "mr.z",
    email: "x2emial.com",
  });
  const student2 = addCourseToStudent({
    id: 2,
    name: "mr.x",
    email: "xfas@gmail.com",
  });
  

  //
}
