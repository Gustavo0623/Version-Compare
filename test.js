function VersionCompare( version1, version2 ) {
    //Insert your code here 

    // convert versions to array
    const v1Array = version1.split('.')
    const v2Array = version2.split('.')

    // will be updated later
    let returnValue;

    // fix any potentional missing values (ex. 1..1 => ['1', '', 1], 1.0. => ['1', '0', ''])
    const missingValuesFix = (array) => {
        for (let i = 0; i < array.length; i++) {
            const check = parseInt(array[i])
            if (!check) {
                array[i] = '0'
            }
        }
        return array
    }
    missingValuesFix(v1Array)
    missingValuesFix(v2Array)

    //check differences in array length and expand to make equal by pushing '0' values to arrays
    if (v1Array.length > v2Array.length) {
        const difference = v1Array.length - v2Array.length
        for (let i = 0; i < difference; i++) {
            v2Array.push('0')
        }
    } else if (v1Array.length < v2Array.length) {
        const difference = v2Array.length - v1Array.length
        for (let i = 0; i < difference; i++) {
            v1Array.push('0')
        }
    }

    // to even out value length issues ex: ([2, 1, 1], [2, 011, 1] => [2, 100, 1], [2, 011, 1])
    for (let i = 1; i < v1Array.length - 1; i++) {
        // convert index value to array
        const indexArr1 = v1Array[i].split('')
        const indexArr2 = v2Array[i].split('')

        // equalize array lengths by adding filler '0's
        if (indexArr1.length > indexArr2.length) {
            const difference = indexArr1.length - indexArr2.length
            for (let i = 0; i < difference; i++) {
                indexArr2.push('0')
            }
        } else if (indexArr1.length < indexArr2.length) {
            const difference = indexArr2.length - indexArr1.length
            for (let i = 0; i < difference; i++) {
                indexArr1.push('0')
            }
        }

        // convert back to string as new value and then change version indexes to the new values
        const newIndex1 = indexArr1.join('')
        const newIndex2 = indexArr2.join('')
        v1Array[i] = newIndex1
        v2Array[i] = newIndex2
    }

    // to iterate over both arrays at once now that they are same length
    for (let i = 0; i < v1Array.length; i++) {
        // change index value to integer to easily compare
        v1Array[i] = parseInt(v1Array[i])
        v2Array[i] = parseInt(v2Array[i])

        // compare and set return value accordingly and set to break loop if not equal
        if(v1Array[i] > v2Array[i]){
            returnValue = 1
            break
        } else if (v1Array[i] < v2Array[i]) {
            returnValue = -1
            break
        } else {
            returnValue = 0
        }
    }
    
    // return the updated return value
    return returnValue
    
}
// expected return = 1
console.log(VersionCompare('17', '2.0.1'))

// expected return = -1
console.log(VersionCompare('2.0001.1', '2.001000.'))

// expected return = 0
console.log(VersionCompare('2', '2.00000.0.0'))

