let arr = [4, 3]

let temp = arr[0] // temp = 4, arr[0] = 4, arr[1] = 3
arr[0] = arr[1] // temp = 4, arr[0] = 3, arr[1] = 3
arr[1] = temp
console.log(arr)
// Expected 3, 4