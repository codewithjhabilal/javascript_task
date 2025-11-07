// dummyjson

// api ..............1
//using prmomise then catch
// let x=fetch('https://dummyjson.com/products')
// console.log(x)

// x.then((data)=>{
//     return data.json()
// }).then((item)=>{
//     console.log(item)
// }).catch((error)=>{
//     console.log(error)
// })


// using asysnc/ await


// const fetchData=async()=>{
//   let y=await fetch('https://dummyjson.com/products')
//     let x=await y.json()
//     console.log(x)
// }

// fetchData()





// api...........2


// let Product=fetch('https://dummyjson.com/products/1')

// using then catch
// Product.then((data)=>{
//     return data.json()
// }).then((item)=>{
//     console.log(item)
// })

// using async await

// let FetchedData=async()=>{
//     let res=await fetch('https://dummyjson.com/products/1')
//     let x =  await res.json()
//     console.log(x)
// }
// FetchedData()


// api 3.........................

// let cartsApi=fetch('https://dummyjson.com/carts')

// cartsApi.then((data)=>{
//     return data.json()
// }).then((item)=>{
//     console.log(item)
// })

// using async /await 



// let cartsApiasync=async()=>{
//     let res= await fetch('https://dummyjson.com/carts')
//     let x= await res.json()
//     console.log(x)
// }
// cartsApiasync()



// api.............4


// using then catch 


// let recipeApi= fetch('https://dummyjson.com/recipes')

// recipeApi.then((data)=>{
//     return data.json()
// }).then((item)=>{
//     console.log(item)
// })



// using async /await


// let recipeApi=async()=>{
//     let res=await fetch('https://dummyjson.com/recipes')
//     let x= await res.json()
//     console.log(x)
// }


// recipeApi()




// api...............5

// using then /catch

// const userApi=fetch('https://dummyjson.com/users')

// userApi.then((data)=>{
//     return data.json()
// }).then((item)=>{
//     console.log(item)
// })


// using async /await 


// const userApis=async()=>{
//     let res=await fetch('https://dummyjson.com/users')
//     let y=await res.json()
//     console.log(y)
// }

// userApis()


// api ....6

// using then /catch

// const postApi=fetch('https://dummyjson.com/posts')

// postApi.then((data)=>{
//     return data.json()
// }).then((item)=>{
//     console.log(item)
// })





// const postApis=async()=> {
//     let res=await fetch('https://dummyjson.com/posts')
//     let x= await res.json()
//     console.log(x)
// }

// postApis()

// api ............7

// using then /catch

// const commentsApi=fetch('https://dummyjson.com/comments')
// commentsApi.then((data)=>{
//     return data.json()
// }).then((item)=>{
//     console.log(item)
// })

// using async /await

// const commentsApis=async()=>{
//     let res= await fetch('https://dummyjson.com/comments')
//     let x= await res.json()
//     console.log(x)

//      x.comments.forEach((item) =>{
        
//         console.log(item.body)
//     })

// }

// commentsApis()





    



// api.....................8


// using then /catch

// const todoApps=fetch('https://dummyjson.com/todos')

// todoApps.then((data)=>{
//     return data.json()
// }).then((item)=>{
//     console.log(item)
// })


// using async /await


// const todoAppsApi=async()=>{
//     let res=await fetch('https://dummyjson.com/todos')
//     let x = await res.json()
//     console.log(x)
// }

// todoAppsApi()



// Api.....................9

// using then catch


// const quotesApi=fetch('https://dummyjson.com/quotes')

// quotesApi.then((data)=>{
//     return data.json()
// }).then((item)=>{
//     console.log(item)
// })




// using asysnc await


// const quotesApis=async()=>{
//     let res= await fetch('https://dummyjson.com/quotes')
//     let x= await res.json()
//     console.log(x)
// }

// quotesApis()


// api...........10


// using then /catch

// const sortProductApi=fetch('https://dummyjson.com/products?sortBy=title&order=asc')


// sortProductApi.then((data)=>{
//     return data.json()
// }).then((item)=>{
//     console.log(item)
// })


// using async /await

// const sortProductApis=async()=>{
//     let res=await fetch('https://dummyjson.com/products?sortBy=title&order=asc')
//     let y=await res.json()
//     console.log(y)
// }

// sortProductApis()