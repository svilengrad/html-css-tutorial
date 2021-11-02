        //  0    1    2
let arr = [120, 230, 506];
        // 3
arr.push(1000);
console.log(arr[0] * arr[1]); // get value by index
console.log(arr[arr.length-1]); // get the last value 

arr[0] = 121; // change the value of the element with index 0
console.log(arr[0]);