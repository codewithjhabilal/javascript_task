//1. Write a code to create a class `Person` with a constructor that initializes `name` and `age` properties

// class Person{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
// }

// let p1=new Person('ram',25)
// console.log(p1)


// 2. Add Method to Class:
//  - Write a method inside the `Person` class to return a greeting message like "Hello, my name is
// [name]"


// class Person{
//     constructor(name,age){
//         this.name=name
//         this.age=age

//     }

//     greeting(){
//         console.log(`Hello,my name is ${this.name} and my age is ${this.age}`)
//     }

// }


// let p2=new Person('ram',30)
// p2.greeting()
// console.log(p2)


// 3. Instantiate a Class:
//  - Write a code to create an instance of the `Person` class with `name` "John" and `age` 30, and call the
// greeting method.


// class Person{
//     constructor(name,age){
//         this.name=name
//         this.age=age

//     }

//     greet(){
//         console.log(`name ${this.name} age ${this.age}`)

//     }

// }

// let p1=new Person('John',30)
// p1.greet()


// 4. Class Property Initialization:
//  - Write a class `Car` with `make` and `model` properties initialized in the constructor.


// class Car{
//     constructor(make,model){
//         this.make=make
//         this.model=model
//     }
// }


// let c1=new Car('BMW','s-series')
// console.log(c1)


// 5. Basic Arrow Function:
//  - Write an arrow function that takes two numbers as parameters and returns their sum


// let  a=((a,b)=>{
//     return a+b
// })

// console.log(a(4,5))

// 6. Arrow Function with Default Parameter:
//  - Write an arrow function that takes a number and returns its square, with a default parameter of 2 if
// no argument is provided.



// let b=((a=2)=>{
//     return a*a
// })

// console.log(b())


// 7. Arrow Function with No Parameters:
//  - Write an arrow function that returns a string "Hello, World!" with no parameters.


// let word=(()=>{
//     return'Hello,World!'
// })

// console.log(word())


// 8. Arrow Function with Object Return:
//  - Write an arrow function that returns an object with properties `name` and `age`.


// let a=(()=>{
//     return {
//         name:'ram',
//         age:25
//     }
// })

// console.log(a())