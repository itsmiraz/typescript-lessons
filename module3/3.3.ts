{
  // type guard

  interface Person {
    name: string;
    readonly id: string;
    balance: number;
  }

  // type of  ---> tpye gurd
  type AlphaNuemeric = string | number;

  const add = (param1: AlphaNuemeric, param2: AlphaNuemeric): AlphaNuemeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };
  // const result1 = add("2", 3)
  // console.log(result1);

  // IN guard

  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name}. My role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}.`);
    }
  };

  const normalUser: NormalUser = {
    name: "Miraj",
  };

  const adminUser: AdminUser = {
    name: "ADMIN",
    role: "admin",
  };

  // getUser(normalUser)
  // getUser(adminUser)

  //
}
