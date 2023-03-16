const movier = require('movier');
let b = {}
async function getTitleDetails() {
  let movierPromise = movier.getTitleDetailsByName("interstellar 2014");
  let b = await movierPromise;
  console.log(b);
}

getTitleDetails();