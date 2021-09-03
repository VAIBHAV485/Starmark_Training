function firstmethod(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve( console.log("This is the first method"));
      },5000)});
    
}
function secondmethod(){
    return new Promise((resolve,reject)=>{
       resolve( console.log("This is second method"));
    });
    
}
function thirdmethod(){
    return new Promise((resolve,reject)=>{
       resolve( console.log("This is the third method"));
    });
    
}
function fourthmethod(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve( console.log("This is the fourth method"));
          },2000)});
    
}
firstmethod().then(()=>{
    secondmethod().then(()=>{
        thirdmethod().then(()=>{
            fourthmethod();
        })
    })
})
