export const add = (s) => {
    if(!s) return 0;
    let arr = s.split(',')
    let sum = 0
    for(let i = 0; i<arr.length; i++){
       let x =  Number(arr[i])
        sum = sum + x
    }
       return (sum)
}

let res = add('')
console.log(res)