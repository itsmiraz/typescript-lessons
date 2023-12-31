{
    // Learnining Fn
// Normal Fn
// Arrow Fn

function Add(num1:number, num2:number) {
    const sum= num1+num2
    return sum
}

Add(2, 2)

const AddArrow = (num1: number, num2: number): number => num1 + num2


// object-> fn thakle take method bole


const poorUser = {
    name: 'Miraj',
    balance: 0,
    addBalance(balance: number) :number{
        return this.balance +balance
    }
}

const array: number[] = [1, 3, 23, 3]

    const newArray: number[] = array.map((elem: number): number => elem * elem)
    

    
}