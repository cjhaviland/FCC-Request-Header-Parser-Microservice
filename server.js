// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", function (req, res) {
  res.json({
"ipaddress": "8.40.35.10",
"language": "en-US",
"software": "Windows NT 10.0; Win64; x64"
});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

/*
User Story: I can get the IP address, language and operating system for my browser.

Example: 
{
"ipaddress": "8.40.35.10",
"language": "en-US",
"software": "Windows NT 10.0; Win64; x64"
}

*/