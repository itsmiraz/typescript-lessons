{
  // ternery operator || optional chaining|| nullish coalicing operator

  const age: number = 15;
  // if (age >= 18) {
  //     console.log('adult');
  // }
  // else {
  //     console.log('Not adult');
  // }

  const isAdult = age >= 18 ? "adult" : "not adult";

  // Nullish coalecsing operator
  // null / undefined ---> decision making

  const isAuthenticated = "";
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  // console.log({ result1 }, { result2 });

  type User = {
    name: String;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
    };
    

    // Ternery

    const user: User = {
        name: "Miraj",
        address: {
            road: "Road1",
            city: 'GCG',
            presentAddress: "Vannara"
            
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? 'None'


    console.log({permanentAddress});


}
