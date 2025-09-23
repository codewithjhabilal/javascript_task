// 11. Write a function printPrimeNumbers(n) that prints all prime numbers from 1 to n.

// function printPrimeNumbers(){
//     let n=20
//     let isPrime=true
//     for (let i=2;i<=n;i++){
//         if(n%i==0){
//             isPrime=false
//             return
//         }
//     }
//     if(isPrime){
//         console.log(`${n} is prime number`)
//     }else{
//         console.log(`${n} is not a prime number`)
//     }
// }
// let x=printPrimeNumbers()
// console.log(x)

//12. Write a function printOddAndEvenCount(n) that prints the count of odd and even
// numbers from 1 to n.

// function printOddAndEvenCount(n){
//     let evencount=0
//     let oddcount=0
//     for(let i=1;i<=n;i++){
//         if(i%2==0){
//             console.log(i,'even')
//             evencount++
//         }else{
//             console.log(i,'odd')
//             oddcount++
//         }
//     }
//     console.log(evencount,'total count of even')
//     console.log(oddcount,'total count of odd')
// }
// printOddAndEvenCount(20)

// 13.Write a function sumOfSquares(n) that returns the sum of squares of numbers from 1 to
// n.

// function sumOfSquares(n){
//     let sum=0
//     for(let i=1;i<=n;i++){
        
//         sum+=i*i
//     }
//     console.log(sum)
//     return sum

// }
// sumOfSquares(20)

// 14. Write a function sumOfCubes(n) that returns the sum of cubes of numbers from 1 to n.

// function sumOfCubes(n){
//     let sum=0
//     for(let i=1;i<=n;i++){
//         sum+=i*i*i
//     }
//     return sum

// }
// let x=sumOfCubes(20)
// console.log(x)

// 16.Write a function gcd(a, b) that calculates the greatest common divisor using loops.

// function gcd(a, b){
//     let minNumber=0
//     for(let i=1;i<=x;i++){
//         if(a%i===0 && b%i===0){
//             minNumber=i
//         }
//     }
//     return minNumber
// }
// let y=gcd(20, 30)
// console.log(y)

// 19.Write a function sumOddDigits(num) that returns the sum of only the odd digits in a number.

// function sumOddDigits(num){
//     let sum=0
//     for(let i =1;i<=num;i++){
//         if(i%2!=0){
//             console.log(i)
//             sum+=i
//         }
//     }
//     return sum
    
   
//   }
// let x=sumOddDigits(20)
// console.log(x)

// 20.Write a function printNumberSeries(n) that prints numbers in this series: 1, 2, 4, 7, 11,16…

// function printNumberSeries(n){
//     let num=1
//     let diff=1
//     for(let i=1;i<=n;i++){
//         console.log(i)
//         num+=diff
//         diff++
//     }
//     console.log(num)
//     console.log(diff)
//     return num ,diff
   
// }
// let x=printNumberSeries(10)
// console.log(x)