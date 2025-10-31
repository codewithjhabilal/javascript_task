// 1. Create an array of 10 numbers and print the first and last element
// let arr = [1,2,3,4,5,6,7,8,9,10]

// console.log("First element:",arr[0])
// console.log("Last element:",arr[arr.length - 1])

// 2.Find the length of an array and print every element using a for loop
// let arr = [1,2,3,4,5,6,7,8,9,10]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

//3. Print all numbers greater than 5 from an array.
// let arr = [1,2,3,4,5,6,7,8,9,10]

// for(i=0;i<arr.length;i++){
//     if(arr[i]>5){
//         console.log(arr[i])
//     }
// }

// 4. Count how many even numbers are in the array.

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let even = 0

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 0){
//         even++
//     }
// }
// console.log("Total even numbers:", even)

// 5. Find the sum of all odd numbers in the array
// let arr = [1,2,3,4,5,6,7,8,9,10]

// let sumOfOdd=0

// for(i=0;i<arr.length;i++){
//     if(arr[i]%2!==0){
//         sumOfOdd+=arr[i]

//     }
// }
// console.log(sumOfOdd)

// 6. Find the largest number in the array.
// let arr = [1,2,3,4,5,6,7,8,9,10]

// let largestNumber = arr[0]

// for (let i = 1;i< arr.length;i++){
//     if (arr[i]>largestNumber) {
//         largestNumber = arr[i]
//     }
// }

// console.log("Largest number:", largestNumber)

// 7. Find the smallest number in the array.
//  let arr = [1,2,3,4,5,6,7,8,9,10]

// let SmallestNumber = arr[0]

// for (let i = 1;i< arr.length;i++){
//     if (arr[i]<SmallestNumber) {
//         SmallestNumber = arr[i]
//     }
// }

// console.log(SmallestNumber)

// 8. Print all numbers that are divisible by 3.
//  let arr = [1,2,3,4,5,6,7,8,9,10]

// for(let i=0;i<arr.length;i++){
//     if(arr[i]%3==0){
//        console.log(arr[i])
//     }
// }

// 9. Multiply every number by 3 using map() and print the new array
//  let arr = [1,2,3,4,5,6,7,8,9,10]

// let newArr=arr.map((items)=>{
//     return items*3
// })
// console.log(newArr)

// 10. Use forEach() to print the square of each number

//  let arr = [1,2,3,4,5,6,7,8,9,10]

// arr.forEach(item => {
//     console.log(item * item)
// });

// 11. From [10, 20, 30, 40, 50], create a new array that contains each number divided by 10
// using map().

//  let arr = [10, 20, 30, 40, 50]

//  let newDividedByTen=arr.map((items)=>{
//     return items/10
//  })

//  console.log(newDividedByTen)

// 12. Find the average of numbers in an array.


// let arr = [1,2,3,4,5,6,7,8,9,10]

// let sum = 0

// for(let i = 0; i < arr.length; i++){
//     sum += arr[i]
// }

// let average = sum / arr.length

// console.log("Sum:", sum)
// console.log("Average:", average)

 

// 15. Write a function that returns the sum of all numbers in an array.

// let arr = [1,2,3,4,5,6,7,8,9,10]

// function sumOfAllNumbers(array) {
//     let sum = 0
//     for(let i = 0; i < array.length; i++){
//         sum += array[i]
//     }
//     return sum
// }

// console.log(sumOfAllNumbers(arr))

// 16. Reverse an array without using .reverse().
// let arr = [1,2,3,4,5,6,7,8,9,10]

// for(let i = arr.length - 1; i >= 0; i--){
//     console.log(arr[i])
// }

