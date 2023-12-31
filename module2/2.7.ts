{
  // generic  contraint with key of operetor

  type Vechicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship";

  type Owner2 = keyof Vechicle;

  const person: Owner2 = "bike";

  const getPropertyValue = <x, y extends keyof x>(obj: x, key: y) => {
    return obj[key];
  };

  const user = {
    name: " miraj",
    age: 26,
    address: "dhk",
  };

  const res = getPropertyValue(user, "age");

  //
}
