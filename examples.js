func1=(x) =>{
    return new Promise((resolve, reject) => {
        console.log("**"+x%2)
        if (x%2==0) 
        resolve()
        else
        reject()
         
});
}

func1(3).then(()=>{
      console.log("C'est un nombre pair");
    }, 
    
    ()=>{
      console.error("C'est un nombre impair");
    });
    

    function asynchronous_operational_method() {
       let first_promise = new Promise((resolve, reject) => resolve("Hello"));
       let second_promise = new Promise((resolve, reject) => {
       setTimeout(() => {
       resolve("EIDIA..");
        }, 1000);
       });
       let combined_promise = Promise.all([first_promise, second_promise]);
       return combined_promise;
       }
        async function display() {
        let data = await asynchronous_operational_method();
        console.log(data);
       }
        display();
        


   
