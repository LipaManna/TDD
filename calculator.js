const add = (s) => {
    if(!s) return 0;
    try {
        let arr = s.split(/,|\n/)
        let sum = 0
        for(let i = 0; i<arr.length; i++){
            let x = Number(arr[i])
            if (x<0) {
                throw new Error(`negative numbers not allowed ${x}`)
            }
            sum = sum + x
        }
        return sum
    } catch (error) {
        return error.message
    }
}

let res
try {
    res = add('-4,7')
    console.log(res)
} catch (error) {
    console.error(error.message)
}

module.exports = { add };
