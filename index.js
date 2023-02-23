console.log("client request to get data ...");
console.log("loading started...");

// setTimeout(() => {
//   const response = {
//     url: "https://example.com",
//     status: 200,
//   };

//   console.log("server get response", response);
//   console.log("preparing data ...");

//   setTimeout(() => {
//     const data = {
//       userName: "Tima",
//       userAge: 22,
//     };

//     console.log("data getted", data);
//     console.log("loading ended");
//   }, 2000);
// }, 2000);

const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const errorIndicator = false

        if(!errorIndicator){
            const response = {
                url: "https://example.com",
               status: 200,
            };
              console.log("server get response", response);
                console.log("preparing data ...");
                resolve(response)
        }else{
            reject('something has gone wrong')
        }
    }, 2000)
});
promise
.then((res)=>{
    setTimeout(() => {
            const data = {
              userName: "Tima",
              userAge: 22,
            };
      console.log("data getted", data);
    console.log("secound step", res);
        },2000);
})
.catch((err)=>{
    console.log('Oops sorry try again', err);
})
.finally(()=>{
    console.log('loading anded');
})