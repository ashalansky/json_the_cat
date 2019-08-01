const request = require('request');
const breedName = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {
  // console.log(body);
  // console.log(typeof body);
  // if (error) {
  //   return console.log(error);
  // }
  const data = JSON.parse(body);

  const breed = data[0];
  if (breed) {
    console.log(breed.description);
  } else {
    console.log(`Failed to find breed ${breedName}`);
  }
// console.log(data);
// console.log(typeof data);
});