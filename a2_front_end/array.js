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


// 13. Create a new array that contains only even numbers from another array using filter().

// let arr = [1,2,3,4,5,6,7,8,9,10]

// let evens=arr.filter((items)=>{
//     return items%2==0
// })

// console.log(evens)

// 14. Use a loop to find how many elements are greater than 100

// let numbers = [50, 120, 200, 90, 150, 30, 300]
// let count = 0

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 100) {
//         count++;
//     }
// }

// console.log("Elements greater than 100:", count)


 

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

//17.  Write a program to find the second largest number in the array

// let arr = [1,2,3,4,5,6,7,8,9,10]

// let seconLargestNumber=arr.find((items)=>{
//     return items>arr.length-2
// })

// console.log(seconLargestNumber)

// 18.Join all array elements into a single string separated by commas
// let arr = [1, 2, 3, 4, 5]
// let str = ""
// for(let i = 0;i < arr.length;i++){
//     str += arr[i]
//     if(i!==arr.length-1){
//         str += "," 
//     }
// }
// console.log(str)

// 19. Create an array of names and print only names that start with the letter "A".


// let names = ["Alice", "Bob", "Arjun", "David", "Anita"];


// let findName=names.filter((items)=>{
//     return items[0]==='A'
// })

// console.log(findName)


// 20.Use map() to convert an array of numbers into their double + 1 (e.g. [1,2,3] → [3,5,7]).

// let a=[1,2,3]

// let ConvertNumbers=a.map((items)=>{
//     return items*2+1
// })
// console.log(ConvertNumbers)

// 21.Write a function that takes an array and returns a new array containing only unique
// elements (remove duplicates).

// function removeDuplicates(arr) {
//   const uniqueArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!uniqueArr.includes(arr[i])) {
//       uniqueArr.push(arr[i]);
//     }
//   }
//   return uniqueArr;
// }

// console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));




//22 .Find the difference between the sum of even and odd numbers in the same array.


// let arr = [1,2,3,4,5,6,7,8,9,10]

// let evenSum = 0
// let oddSum = 0

// arr.forEach((items)=>{
//     if(items%2 == 0){
//         evenSum += items
//     } else {
//         oddSum += items
//     }
// })

// let difference = evenSum - oddSum;
// console.log(difference)
