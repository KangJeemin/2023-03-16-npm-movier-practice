const movier = require('movier');
const { resourceLimits } = require('worker_threads');
let b = {}
async function getTitleDetails() {
  let movierPromise = movier.getTitleDetailsByName("interstellar 2014");
  movierPromise.then(result=>{
  b= await result;
    console.log(b)
  })
}

getTitleDetails();


// const movier = require('./node_modules/movier');
// const moviedate = movier.getTitleDetailsByName("interstellar 2014");
// let c = {};
// // // find a title and returns the first matched title data
// async function a() {   
//  let getDatapromise = new Promise((resolve, reject) => {
//     setTimeout(function(){
//       resolve(moviedate)
//       // reject("전송실패!! ")
//     }, 2000);
//   })
//  getDatapromise
//    .then((moviedate)=>{
//      c=moviedate;
    
//    })
//    .catch((err)=>{
//     console.log(err)
//    })
//   }
//   console.log(c)
   
   