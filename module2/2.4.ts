{
  // interface- generic

  interface Developer<T, X=null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      realesYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Miraj",
    computer: {
      brand: "Hp",
      model: "Victus",
      realesYear: 2022,
    },
    smartWatch: {
      brand: "Emilab",
      model: "Kwee",
      display: "Amoled",
    },
  };
  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface Yahmaha {
    model: string;
    cc: string;
  }

  const richDeveloper: Developer<AppleWatch, Yahmaha> = {
    name: "Miraj",
    computer: {
      brand: "Apple",
      model: "Mac book 16",
      realesYear: 2023,
    },
    smartWatch: {
      brand: "Apple",
      model: "watch 10",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      cc: "150",
    },
  };

  //
}
