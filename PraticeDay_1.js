
// // Day 1 

// //  Javascript DSA Setup + Time Complexity 


// // ->  Understand Time Complexity (Big-O Notation)


// // Day 1: Practice Questions (JavaScript DSA)

// // Q -1  Write a function to print the first element of an array.

// // Method 1 

// // function print() {
// //   let arr = ["Hello", "Vishal"];
// //   console.log(arr[0]);
// // }
// // print()


// // method 2 If you want user will enter array


// // function print1(arrr) {

// //   console.log(arrr[0]);

// // }

// // print1(["5", "34", "67"])


// // O2 Write a function to print all elements of an array using a loop.

// // Method 1 

// // function printAllEle(arr) {

// //   for (let i = 0; i < arr.length; i++) {

// //     console.log(arr[i]);

// //   }

// // }

// // printAllEle([23,45,66,77,88,33,22,44,55,66])

// // method 2 


// // function printallele() {
// //   let arr = [45,666,44,33,55,66,77,883,4,5];
// //   for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]); 
// //   }
// // }

// // printallele()

// // Q3 Write a function to print all pairs of elements from an array (nested loops).


// // function all() {

// // for (let i = 1; i <=7; i++) {

// //   for (let j = 1; j <=10; j++) {

// //     console.log(`${i} X ${j} = ${i*j}`);

// //   }
// // }
// // }

// // all()


// // Q-4 Write a function to reverse an array without using the built-in .reverse() method.

// // function reverseArray() {

// //   let arr = [56,76,44,33,45,2,44,55,21,44];
// //   for (let i = arr.length -1; i >=0; i--) {
// //     console.log(arr[i]);
// //   }
// // }

// // reverseArray()



// // Q-5 Write a function to calculate the sum of all elements in an array.

// // function addArray() {
// //   let arr = [45,67,89,34,23,54,67,87];
// //   let sum = 0;

// //   for (let i = 0; i < arr.length; i++) {

// //     sum = sum + arr[i]

// //   }
// //   return sum



// // }

// // console.log(addArray());


// // Q-6 Write a function to copy all elements from one array to a new array.

// // function copyAll() {
// //   let arr = ["Vishal", "Sandeep Joshi", "Pooja Panth", "Yash joshi"]
// // let copy = [];
// // for (let i = 0; i < arr.length; i++) {

// //   copy.push(arr[i])
// // }
// // return copy


// // }

// // console.log(copyAll());


// // Q-7 Write a function to check if an array is empty or not.


// // function CheckArray() {

// //   let arr = []

// //   if (arr.length === 0) {
// //     console.log("Array is Empty");

// //   } else {
// //     console.log("Array is not empty");

// //   }
// //   return 
// // }

// // CheckArray()

// // Q-8 Write a function that returns the maximum value in an array.

// // function Maxvalue() {
// //   let arr = [56,4,33,55,88,3,34];
// //   let max = arr[0];

// //   for (let i = 0; i < arr.length; i++) {

// //     if (arr[i]> max) {
// //       max = arr[i]
// //     }

// //   }
// //   return max


// // }

// // console.log(Maxvalue());

// // Q-9 Write a function that counts even numbers in an array.



// // function CountEven() {
// //   let arr = [455, 67, 8, 3, 55, 6, 2, 87, 54, 74];
// //   let count = 0
// //   for (let i = 0; i < arr.length; i++) {

// //     if (arr[i] % 2 == 0) {
// //       count ++
// //     }
// //   }
// // return count
// // }
// // console.log(CountEven());



// // Q-10 Write a function that counts odd numbers in an array.



// function CountOdd() {
//     let arr = [455, 67, 8, 3, 55, 6, 2, 87, 54, 74, 79];
//     let count = 0
//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] % 2 == 1) {
//             count++
//         }
//     }
//     return count
// }
// console.log(CountOdd());
