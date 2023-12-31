{
    //
    // Nullable Types/unkwon tpye

    const searchName = (value: string| null) => {
        if (value) {
            console.log('Searcing');
        } else {
            console.log('Nothing to Search');
        }
    }
    // searchName(null)

    // Unknown Type
    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000)/3600
            console.log(`the speed is ${convertedSpeed}`);
        }
       else if (typeof value === "string") {
            const [speed,unit] = value.split(' ')
            const convertedSpeed = (parseInt(speed) * 1000)/3600
            console.log(`the speed is ${convertedSpeed}`);
        }
        else {
            console.log('Wrong Input');
        }
    }

    // getSpeedInMeterPerSecond(null)


    // Never

    function thowError(msg: string) {
        throw new Error(msg)

    }
    
    // thowError('Muskil Se error ho geay')
    // 
}