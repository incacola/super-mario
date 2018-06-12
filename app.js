var express = require('express');
var app = express ();

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

app.listen(3000, function(){
    console.log('SuperMario app listening on port 3000!');
});

//Getmethod route
// http://expressjs.com/en/api.html#req
app.get ('/:name', (req, res)=> {
    res.send ('Hello ' + req.params.name + '!\n' );
}); 


