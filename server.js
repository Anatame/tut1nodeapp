
const express = require('express');
var bodyParser = require('body-parser');

const pathToHtml = "/public/html/"
  
const app = express();
const PORT = 3000;
const path = require('path')

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use( express.static( __dirname + '/public' ));
  
app.get('/', (req, res)=>{
    res.status(200);
    res.sendFile(path.join(__dirname, pathToHtml + "index.html"))
});

app.post('/authenticate', (req, res) => {
    console.log(req.body)
    validateLogin({
        email: req.body.email, 
        password: req.body.password
    }, res)
})


function validateLogin(userData, res){
    let email = userData.email
    let password = userData.password

    if(email == "bu@bu.in" && password == "lmao")
        res.sendFile(path.join(__dirname, pathToHtml + "success.html"))
    else
        res.sendFile(path.join(__dirname, pathToHtml + "error.html"))
}

app.listen(PORT, function(){
    console.log(`Server started at port: ${PORT}`)
})