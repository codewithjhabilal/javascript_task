// 1. Create an object `student` with properties `name`, `age`, and `grade`. Assign values to each
// property.

// Student={
//     name:'abc',
//     age:26,
//     grade:"A+"
// }

// console.log(Student.name)
// console.log(Student.age)
// console.log(Student.grade)


// 2. Given an object `car` with properties `make`, `model`, and `year`, write a code to log the `make` and `model` of the car.

// car={
//     make:'Mercides',
//     model:'s-series',
//     year:2025
// }

// console.log(car.make)
// console.log(car.model)


// 3.Change the `grade` property of the `student` object from "A" to "A+".


// student={
//     grade:"A",
// }

// student.grade="A+"

// console.log(student)


// 4.Add a new property `address` to the `student` object with the value "123 Main St".

// student={
//     grade:"A",
// }

// student.address='pokhara'

// console.log(student)

//5. Write a function that checks if the property `age` exists in the `student` object and logs an appropriate message.

// let student = {
//     age: 26
// }

// function checkAge(obj) {
//     if('age' in obj){
//         console.log('age', obj.age)
//     }else{
//         console.log("Property 'age' does not exist.")
//     }
// }
// checkAge(student)



// 6. Delete the `address` property from the `student` object.

// student={
//     grade:"A",
//     address:"pokhara"
// }

// delete student.address

// console.log(student)

// 7.Write a loop that logs all the property names of the `student` object

// let student={
//     name:'abc',
//     age:26,
//     address:'pokhara',
//     street:'ranivan-marg'
// }

// for (let i in student ){
//     console.log(i)
// }

// 8.Write a loop that logs all the property values of the `student` object.

//  let student={
//     name:'abc',
//     age:26,
//     address:'pokhara',
//     street:'ranivan-marg'
// }

// for(let i in student){
//     console.log(student[i])
// }


// 9.Create an array of objects representing books, where each object has properties `title`,`author`, and `year`.

// let books = [
//     {
//         title: "To Kill a Mockingbird",
//         author: "Harper Lee",
//         year: 1960
//     },
//     {
//         title: "1984",
//         author: "George Orwell",
//         year: 1949
//     },
//     {
//         title: "The Great Gatsby",
//         author: "F. Scott Fitzgerald",
//         year: 1925
//     },
//     {
//         title: "Pride and Prejudice",
//         author: "Jane Austen",
//         year: 1813
//     }
// ]

// console.log(books)

// 10.Write a function that logs the titles of all books written by a specific author from the array of book objects.

// let books = [
//     {
//         title: "To Kill a Mockingbird",
//         author: "Harper Lee",
//         year: 1960
//     },
//     {
//         title: "1984",
//         author: "George Orwell",
//         year: 1949
//     },
//     {
//         title: "The Great Gatsby",
//         author: "F. Scott Fitzgerald",
//         year: 1925
//     },
//     {
//         title: "Pride and Prejudice",
//         author: "Jane Austen",
//         year: 1813
//     }
// ]


// function Author(authorName){
//     books.forEach((book) => {
//         if (book.author === authorName) {
//             console.log(book.title)
//         }
//     })
// }

// Author("George Orwell")


// 11.Write an if-else statement to check if a property `email` exists in the `student` object. If it does, log "Email exists," otherwise log "Email does not exist."

// let student = {
//     name: 'abc',
//     age: 26,
//     address: 'pokhara',
//     street: 'ranivan-marg',
//     email: 'abc@gmail.com'
// };

// if ('email' in student) {
//     console.log("Email exists")
// } else {
//     console.log("Email does not exist")
// }

//14. Write a loop that iterates over an array of objects and logs the `name` property of each object.

// let students = [
//         { 
//             name: "shyam", 
//             age: 26 
//         },
//         {
//              name: "Sita",
//              age: 24 
//         },
//         { 
//             name: "Ram",
//             age: 28
//         }
//                 ]
// students.forEach((items)=>{
//     console.log(items.name)
// })


// 16.Create a nested object `company` with properties `name`, `location`, and `departments`where `departments` is another object with properties `HR`, `Engineering`, and `Sales`.
 
// let company = {
//     name: "Tech Solutions",
//     location: "Pokhara",
//     departments: {
//         HR: ["Recruitment", "Employee Relations"],
//         Engineering: ["Frontend", "Backend", "QA"],
//         Sales: ["Domestic", "International"]
//     }
// }
// console.log(company)


// 17 Write a function that logs the value of the `Engineering` department from the `company`object.

// let company = {
//     name: "Tech Solutions",
//     location: "Pokhara",
//     departments: {
//         HR: ["Recruitment", "Employee Relations"],
//         Engineering: ["Frontend", "Backend", "QA"],
//         Sales: ["Domestic", "International"]
//     }
// }

// function logEngineerDept(companyObj) {
//     console.log(companyObj.departments.Engineering)
// }
// logEngineerDept(company)


// 18. Use a loop to add a new property `status: "active"` to each object in an array of employee objects.

// ..........................................................
// pending
// let company = {
//     name: "Tech Solutions",
//     location: "Pokhara",
//     departments: {
//         HR: ["Recruitment", "Employee Relations"],
//         Engineering: ["Frontend", "Backend", "QA"],
//         Sales: ["Domestic", "International"]
//     }
// }

// company.forEach((items)=> {
//     console.log(items.status='active')
    
// })



// 19.Write a function that takes an object and returns the number of properties it has.



//20. Given an object representing a `person` with properties `firstName`, `lastName`, and `age`, write a function that returns the full name by concatenating `firstName` and `lastName`.

// let person = {
//     firstName: "abc",
//     lastName: "cba",
//     age: 26
// }
// function getFullName(obj) {
//     return obj.firstName + " " + obj.lastName
// }
// console.log(getFullName(person))

//21. Write an if-else statement that checks if the `age` property of a `person` object is greater than and logs "Adult" or "Minor."
 
// let person = {
//     firstName: "ram",
//     lastName: "sharma",
//     age: 26
// }

// if (person.age > 18) {
//     console.log("Adult")
// } else {
//     console.log("Minor")
// }

//extra task image task ::::::::: 
//list all activities of fluffy's catfriends and total weight of catfriends sample objects.

// var cat = {
//   name: 'Fluffyy',
//   activities: ['play', 'eat cat food'],
//   catFriends: [
//     {
//       name: 'bar',
//       activities: ['be grumpy', 'eat bread omblet'],
//       weight: 8,
//       furcolor: 'white'
//     },
//     {
//       name: 'foo',
//       activities: ['sleep', 'pre-sleep naps'],
//       weight: 3
//     }
//   ]
// }

// let a=cat.catFriends.reduce((acc,items)=>{
//     return acc+items.weight
// },0)

// console.log(a)




