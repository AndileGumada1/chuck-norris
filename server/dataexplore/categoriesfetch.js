const fetch = require("node-fetch")

 const url = "https://api.chucknorris.io/jokes/random?category={category}" 

 fetch(url)
 .then(function (response) {
     return response.json();
 }).then(function (categorydata) {
    console.log(categorydata.features[0]);
});