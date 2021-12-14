// TASK: Find index of x in array
const x = 12;
let arr = [43, 12, 32, 45, 65];

for(let i = 0; i < arr.length; i++) {
    if(arr[i] == x) {
        console.log(i);
        break;
    }
}
// Expected result: 1