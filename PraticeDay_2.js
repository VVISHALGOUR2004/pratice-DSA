// ✅ Day 2 Plan: Arrays Basics + Traversal


// What is Array ? 

// Ans =>  In JavaScript, an array is a list-like object to store multiple values in one variable.




// ✅ DSA Array Interview Questions for Freshers (Only Questions)
// 🔹 Basic to Intermediate Level:


// **************************                  1. Find the maximum and minimum element in an array.


// let arr = [56, 76, 45, 34, 87, 90, 44, 67];
// let max = arr[0];
// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {

//     // console.log(arr[i]);

//     if (arr[i] > max) {
//         max = arr[i]
//     }

//        if (arr[i] < min) {
//         min = arr[i]
//     }



// }
// console.log("The max number of the array is :", max);
// console.log("The min number of the array is :", min);


// ******************************        2. Reverse an array without using built-in methods.


// let arr = [15, 67, 43, 67, 98, 23, 45];

// for (let i = arr.length - 1; i >= 0; i--) {

//     console.log(arr[i]);

// }



//  ************************** Q 3 Find the second largest element in an array.


// let arr = [67, 54, 78, 98, 45, 98, 34, 32];
// let max1 = arr[0]
// let max2 = arr[1]


// for (let i = 2; i < arr.length; i++) {
//     if (arr[i] > max1) {
//         max2 = max1
//         max1 = arr[i]
//     } else if (arr[i] > max2 && arr[i] !== max1) {
//         max2 = arr[i]
//     }


// }

// console.log(max1);
// console.log(max2);


//  *****************************************Q-4 Check if the array is sorted in ascending order.

// let arr = [10, 20, 30, 240, 50]; // change this to test
// let isSorted = true;

// for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//         isSorted = false;
//         break;
//     }
// }

// if (isSorted) {
//     console.log("The array is sorted in ascending order.");
// } else {
//     console.log("The array is NOT sorted in ascending order.");
// }



// Q5 Find the sum of all elements in an array.


let arr = [87,45,66,88,33,44,55,66];
let sum = 0
for (let i = 0; i < arr.length; i++) {
    

    sum =  arr[i] + sum

    
}

console.log(sum);


