{


    // Spread Operator
    // Distructuring
    // Rest Operator

    const bros1 :string[]=['alif','ovi','onik']
    const bros2: string[] = ['hasan', 'rahat', 'nice']
    

    bros1.push(...bros2)


    // Rest Operator
    
    const GreetFrnds = (...friends: string[]) => {
        
        friends.forEach((frnd:string)=> console.log(`Hi ${frnd}`) )
    }

    GreetFrnds("miraj","hasan","fahi")


}