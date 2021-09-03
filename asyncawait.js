async function firstmethod(){
    
        console.log("This is the first method");

}
    

async function secondmethod(){
        await firstmethod();    
        console.log("This is second method");   
    }

async function thirdmethod(){
         await secondmethod();
         console.log("This is the third method");
    };

thirdmethod();
