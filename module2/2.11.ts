{
    // Utitly Types
    // Pick
    
    type Person = {
        name: string,
        age: number,
        email?: string,
        contact:string
    }

    // Pick
    type Name = Pick<Person,"name"| 'age'>

    // Omit
    type ContactInfo = Omit<Person,"name"|"age">

    // required
    type PersonRequired = Required<Person>

    // Pertial
    type PersonPartial = Partial<Person>

    // Readonly

    type PersonReadOnly = Readonly<Person>

    const person1: PersonReadOnly = {
        name: "Miraj",
        age: 120,
        contact:'12121212'
    } 

    // person1.name="Mr.yz"

    // Record
    // type MyObj = {
    //     a: string,
    //     b:string
    // }


    type MyObj = Record<string,string>

    const EmtyObj: Record<string,unknown> = {}
    



    const Obj1: MyObj = {
        a: "aa",
        b: 'sa',
        c: 'ds',
        d:"s"
    }




    // 
    
}