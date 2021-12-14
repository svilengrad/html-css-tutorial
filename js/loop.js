// TASK: Print all values of arr without 0

let arr = [12, 0, 13, 0, 14, 15]

for(let i = 0; i < arr.length; i++) {
    if(arr[i] == 0) {
        continue;
    }
    console.log(arr[i])
}