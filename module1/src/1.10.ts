{
  // Union Type

  // String Literal Type
  //   type FrontEndDeveloper = "fakibajdeveloper" | "juniorDeveloper";
  //   type FullStackDeveloper = "expert" | "frontend";
  type User = {
    name: String;
    email?: String;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "B+";
  };

  const user1: User = {
    name: "Miraj",
    email: "miraj@gmail.com",
    gender: "male",
    bloodGroup: "O+",
  };

  type FrontEndDeveloper = {
    skill: string[];
    designation1: "Frontend Developer";
  };

  type BackEndDeveloper = {
    skill: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper;

    // "|" unipon Type
    // "&" intersaction type
    
    
  const fullStackDeveloper: FullStackDeveloper = {
    skill: ["HTML", "CSS"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
