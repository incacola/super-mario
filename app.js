const express = require('express');
const crypto = require('crypto')
const cypher = crypto.createCipher('aes-256-cbc', 'secret')
const decypher = crypto.createDecipher('aes-256-cbc', 'secret')
let app = express ();

let movies = {
  "Instructions": "delete everything in this object and make your own JSON object using different data.",
  "Title": "The Graduate",
  "Year": "1967",
  "Rated": "Approved",
  "Released": "22 Dec 1967",
  "Runtime": "106 min",
  "Genre": [
    "Comedy",
    "Drama",
    "Romance"
  ],
  "Director": "Mike Nichols",
  "Writers": [
    "Calder Willingham (screenplay)",
    "Buck Henry (screenplay)",
    "Charles Webb (based on the novel by)"
  ],
  "Actors": [
    "Anne Bancroft",
    "Dustin Hoffman",
    "Katharine Ross",
    "William Daniels"
  ],
  "Plot": "Ben has recently graduated college, with his parents now expecting great things from him. At his \"Homecoming\" party, Mrs. Robinson, the wife of his father's business partner, has Ben drive her home, which leads to an affair between the two. The affair eventually ends, but comes back to haunt him when he finds himself falling for Elaine, Mrs. Robinson's daughter.",
  "Language": "English",
  "Country": "USA",
  "Awards": "Won 1 Oscar. Another 22 wins & 13 nominations.",
  "Poster": "http://ia.media-imdb.com/images/M/MV5BMTQ0ODc4MDk4Nl5BMl5BanBnXkFtZTcwMTEzNzgzNA@@._V1_SX300.jpg",
  "imdbRating": "8.1",
  "imdbVotes": "183,131",
  "imdbID": "tt0061722"
}

app.get('/', function (req,  res){
    res.send ('Hello World!');
});

//app.get(url, funktion zum antworten);

app.get('/mario',(req,res)=>{
    res.send ('Hallo Mario!\n');
    console.log('Hallo Mario aus der Konsole');
})

app.get('/felipe',(req,res)=>{
    res.send ('Hallo Felipe!\n');
    console.log('Hallo Felipe aus der Konsole');
})

//Getmethod route
// http://expressjs.com/en/api.html#req
app.get ('/name/:name', (req, res)=> {
    res.send ('Hello ' + req.params.name + '!\n' );
}); 

app.get('/encrypt/:mario', (req, res)=>{
    //console.log(marioTestFunction(4,4));
    //console.log(''+req.params.mario);
    mariosEncryption(req.params.mario);
    res.send(200)

})

app.listen(3000, function(){
    console.log('SuperMario app listening on port 3000!');
});

function mariosEncryption(routeParam){
    cypher.update(routeParam, 'utf8');
    const encrypted = cypher.final('hex');
    console.log(encrypted);
    decypher.update(''+encrypted, 'hex')
    const decrypted = decypher.final('utf8')
    console.log(decrypted)
}
