//  async function getData(){
//      // Simulate getting data from a server
//  return new Promise ((resolve, reject)=>{
//    setTimeout(() => {
//     resolve(455)
//    }, 3500);
//  })
// }
// async function getData() {
//     // Simulate getting data from a server
//    let x = await  fetch('https://jsonplaceholder.typicode.com/todos/1')
//    let data = await x.json()
//     console.log(data)
//     return data
// }

async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST",  
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  postData("https://example.com/answer", { answer: 42 }).then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
  
async function main(){                        

    console.log("Loading modules")
    
    console.log("Do something else")
    
    console.log("Load data")
    let data = await getData()
    
    console.log(data)
    
    console.log("process data")
    
    
    console.log("task 2")
} 

main()

// data.then((v)=>{
    
//     console.log(data)
    
//     console.log("process data")
    
//     console.log("task 2")
// })  
    
  





