// Promise is  away or a method which can perform asynchronous activity do .

// it handle asynchronous operation..

// Promise have three inform return

// 1.Pending
// 2.Reject
// 3.Fullfiled/Resolved 

// Syntax

// const pro=new Promise((resolve,reject)=>{
//     let success=false
//     if(success){
//         resolve("Data Found")

//     }else{
//         reject("Data Not Found")
//     }
// })


// console.log(pro)

// So if data is not comes or rejected then how we handle so lets begin:
// 
// so we use then catch for handel error activity
// 
// example of promise so we have a variable name (pro) 

// pro.then((item)=>{
//     console.log(item)
// }).catch((error)=>{
//     console.log(error)
// })




// Now we are using async and await
// asunc and await always used in functions
// we can use try/catch in async and await
// syntax:


// const pro=new Promise((resolve,reject)=>{
//     let success=false
//     if(success){
//         resolve("Data Found")

//     }else{
//         reject("Data Not Found")
//     }
// })

// const fetchData=async()=>{
//     try {
//         let x= await pro
//         console.log(x)
//     } catch (error) {
//         console.log(error)
//     }
     
// } 

// fetchData()


