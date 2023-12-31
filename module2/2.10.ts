{
    // mapped types

    const arrayOfNumbers: number[] = [1, 4, 4, 23, 2]
    
    // const arrayOfStrings: string[] = ['1', '4', '23', '2']
    const arrayOfStings:string[] = arrayOfNumbers.map((num)=>num.toString())

    


    type AreaNum = {
        height: number;
        width: number;
    }

    type height = AreaNum["height"] //look up type

    // type AreaStrng = {
    //     height: string;
    //     width: string;
    // }

       type AreaStr <T>= {
        [key in keyof T ]: T[key]
        }

    
    
    const area1: AreaStr<{ height: string; width: number }> = {
        height: "111",
        width:12
        
    }
    
    // 
}