{
  // access modifier
  class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    //   addDeposite(amount: number) {
    //       this._balance = this._balance + amount
    //   }
    //   Getter

    get balance() {
      return this._balance;
    }
    set deposite(amount: number) {
      this._balance = this._balance + amount;
    }
    //   getBalance() {
    //     return this._balance
    //   }
  }

  class StudentAccount extends BankAccount {}

  const poorGuyAccout = new BankAccount(11, "Poor Guy", 200);

  poorGuyAccout.deposite = 20
  console.log(poorGuyAccout.balance);
  // const poorGuyAccoutBalance= poorGuyAccout.getBalance()
  // console.log(poorGuyAccoutBalance);

  //
}
