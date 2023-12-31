"use strict";
{
    // Learnining Fn
    // Normal Fn
    // Arrow Fn
    function Add(num1, num2) {
        const sum = num1 + num2;
        return sum;
    }
    Add(2, 2);
    const AddArrow = (num1, num2) => num1 + num2;
    // object-> fn thakle take method bole
    const poorUser = {
        name: 'Miraj',
        balance: 0,
        addBalance(balance) {
            return this.balance + balance;
        }
    };
    const array = [1, 3, 23, 3];
    const newArray = array.map((elem) => elem * elem);
}
