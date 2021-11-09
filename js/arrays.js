/*
 * Array is a data structure
 * Random access - able to access every element with its index
 * Able to modify each and every element
 * Add elements (at the rear, at the front and everywhere else)
 * Remove (the same as with Add)
 */
        //  0    1    2
let arr = [120, 230, 506];
        // 3
arr.push(1000); // adds to the rear of the array
// console.log(arr[0] * arr[1]); // get value by index
// console.log(arr[arr.length-1]); // get the last value 

arr[0] = 121; // change the value of the element with index 0
arr.pop(); // removes last element
// [ 121, 230, 506 ]
arr.splice(1, 1); // splice(n, k). Removes k elements starting from index n

// [ 121, 506 ]
console.log(arr);