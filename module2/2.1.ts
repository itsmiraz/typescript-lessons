{
  // tYPE Assertion
  //In TypeScript, type assertions are a way for developers to tell the compiler to treat a value as a specific type, even if the compiler cannot infer i
  let anything: any;

  anything = "miraj";
  anything = 222;
  // (anything as number).

  const kgToGm = (value: number | string): string | number | undefined => {
    if (typeof value === "string") {
      const convertedVlue = parseFloat(value) * 1000;
      return `the converted value is : ${convertedVlue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(100) as number;
  const result2 = kgToGm("1000") as string;

  type CustomError = {
    message: string;
  };

  try {
  } catch (err) {
    console.log((err as CustomError).message);
  }

  //
}
